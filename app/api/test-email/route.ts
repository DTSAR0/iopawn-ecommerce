import { NextRequest, NextResponse } from "next/server";
import { sendOrderConfirmation } from "@/lib/mail";

export async function POST(req: NextRequest) {
  try {
    console.log("🧪 Testing email functionality...");
    
    const testEmail = "test@example.com";
    const testOrderId = "TEST123";
    const testItems = [
      { name: "Test Product 1", quantity: 2, price: 2500 }, // $25.00
      { name: "Test Product 2", quantity: 1, price: 1500 }, // $15.00
    ];
    const testTotalCents = 6500; // $65.00

    await sendOrderConfirmation(testEmail, testOrderId, testItems, testTotalCents);
    
    console.log("✅ Test email sent successfully");
    
    return NextResponse.json({
      success: true,
      message: "Test email sent successfully",
      details: {
        to: testEmail,
        orderId: testOrderId,
        itemsCount: testItems.length,
        total: `$${(testTotalCents / 100).toFixed(2)}`
      }
    });

  } catch (error) {
    console.error("❌ Test email failed:", error);
    return NextResponse.json(
      { 
        success: false, 
        error: "Failed to send test email", 
        details: error instanceof Error ? error.message : "Unknown error" 
      },
      { status: 500 }
    );
  }
} 