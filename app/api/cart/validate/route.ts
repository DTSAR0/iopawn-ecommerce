import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export interface CartValidationRequest {
  items: Array<{
    productId: string;
    quantity: number;
  }>;
}

export interface CartValidationResponse {
  isValid: boolean;
  errors: Array<{
    productId: string;
    message: string;
  }>;
  warnings: Array<{
    productId: string;
    message: string;
  }>;
  validatedItems: Array<{
    productId: string;
    quantity: number;
    price: number;
    available: boolean;
    stockQuantity: number;
    backorder: boolean;
    backorderQuantity?: number;
    deliveryDelay?: string;
  }>;
  totalPrice: number;
}

export async function POST(req: NextRequest) {
  try {
    const body: CartValidationRequest = await req.json();
    const { items } = body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        {
          isValid: false,
          errors: [{ productId: "general", message: "Cart is empty" }],
          warnings: [],
          validatedItems: [],
          totalPrice: 0,
        },
        { status: 400 }
      );
    }

    const errors: CartValidationResponse["errors"] = [];
    const warnings: CartValidationResponse["warnings"] = [];
    const validatedItems: CartValidationResponse["validatedItems"] = [];

    // Get all product IDs from the cart
    const productIds = items.map((item) => item.productId);

    // Fetch all products from database
    const products = await db.product.findMany({
      where: {
        id: { in: productIds },
      },
      include: {
        category: true,
      },
    });

    // Create a map for quick lookup
    const productMap = new Map(products.map((product) => [product.id, product]));

    // Validate each item
    for (const item of items) {
      const product = productMap.get(item.productId);

      if (!product) {
        errors.push({
          productId: item.productId,
          message: "Product not found",
        });
        continue;
      }

      // Check quantity limits
      if (item.quantity <= 0) {
        errors.push({
          productId: item.productId,
          message: "Quantity must be greater than 0",
        });
        continue;
      }

      if (item.quantity > 10) {
        warnings.push({
          productId: item.productId,
          message: "Large quantity detected - please contact support for bulk orders",
        });
      }

      // Get actual stock quantity from the database
      const stockQuantity = product.stockQuantity;
      const backorder = item.quantity > stockQuantity;
      const backorderQuantity = backorder ? item.quantity - stockQuantity : 0;
      
      if (backorder) {
        warnings.push({
          productId: item.productId,
          message: `We don't have ${item.quantity} items of this product in stock. ${stockQuantity} items will be shipped immediately, and ${backorderQuantity} items will be backordered. This will increase delivery time by 2-3 weeks.`,
        });
      }

      // Add to validated items
      validatedItems.push({
        productId: item.productId,
        quantity: item.quantity, // Allow full quantity even if backordered
        price: product.priceCents / 100, // Convert cents to dollars
        available: true, // Assume all products are available
        stockQuantity,
        backorder,
        backorderQuantity: backorder ? backorderQuantity : undefined,
        deliveryDelay: backorder ? "2-3 weeks" : undefined,
      });
    }

    // Check if cart has any valid items
    const hasValidItems = validatedItems.some((item) => item.quantity > 0);

    // Calculate total price
    const totalPrice = validatedItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    const response: CartValidationResponse = {
      isValid: errors.length === 0 && hasValidItems,
      errors,
      warnings,
      validatedItems,
      totalPrice,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Cart validation error:", error);
    return NextResponse.json(
      {
        isValid: false,
        errors: [{ productId: "general", message: "Internal server error" }],
        warnings: [],
        validatedItems: [],
        totalPrice: 0,
      },
      { status: 500 }
    );
  }
} 