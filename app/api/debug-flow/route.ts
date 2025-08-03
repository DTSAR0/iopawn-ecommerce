import { NextRequest, NextResponse } from "next/server";
import { sendOrderConfirmation } from "@/lib/mail";

export async function POST(req: NextRequest) {
  try {
    console.log("🧪 DEBUG FLOW: Starting comprehensive test...");
    
    // Test 1: Check environment variables
    console.log("🔍 Environment check:");
    console.log("- RESEND_API_KEY present:", !!process.env.RESEND_API_KEY);
    console.log("- EMAIL_FROM present:", !!process.env.EMAIL_FROM);
    console.log("- EMAIL_FROM value:", process.env.EMAIL_FROM);
    
    if (!process.env.RESEND_API_KEY || !process.env.EMAIL_FROM) {
      return NextResponse.json({
        success: false,
        error: "Missing environment variables",
        details: {
          resendApiKeyPresent: !!process.env.RESEND_API_KEY,
          emailFromPresent: !!process.env.EMAIL_FROM,
          emailFromValue: process.env.EMAIL_FROM
        }
      }, { status: 400 });
    }

    // Test 2: Simulate order data
    const testData = {
      email: "dimatsaryuk30@gmail.com",
      orderId: "DEBUGFLOW123",
      orderItems: [
        { name: "Debug Product 1", quantity: 1, price: 1000 },
        { name: "Debug Product 2", quantity: 2, price: 2000 },
      ],
      totalCents: 5000
    };

    console.log("📦 Test data:", testData);
    
    // Test 3: Call sendOrderConfirmation
    console.log("📧 Calling sendOrderConfirmation...");
    
    await sendOrderConfirmation(
      testData.email,
      testData.orderId,
      testData.orderItems,
      testData.totalCents
    );
    
    console.log("✅ DEBUG FLOW: Email send completed successfully");
    
    return NextResponse.json({
      success: true,
      message: "Debug flow completed successfully",
      details: {
        email: testData.email,
        orderId: testData.orderId,
        itemsCount: testData.orderItems.length,
        total: `$${(testData.totalCents / 100).toFixed(2)}`,
        environment: {
          resendApiKeyPresent: !!process.env.RESEND_API_KEY,
          emailFromPresent: !!process.env.EMAIL_FROM,
          emailFromValue: process.env.EMAIL_FROM
        }
      }
    });

  } catch (error) {
    console.error("❌ DEBUG FLOW failed:", error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: "Debug flow failed", 
        details: error instanceof Error ? error.message : "Unknown error",
        stack: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
} 