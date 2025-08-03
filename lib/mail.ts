import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Validate environment variables
if (!process.env.RESEND_API_KEY) {
  console.warn('⚠️ RESEND_API_KEY not found. Email functionality will be disabled.')
}

if (!process.env.EMAIL_FROM) {
  console.warn('⚠️ EMAIL_FROM not found. Email functionality will be disabled.')
}

export async function sendOrderConfirmation(email: string, orderId: string, items: any[], totalCents: number) {
  // Check if email service is configured
  if (!process.env.RESEND_API_KEY || !process.env.EMAIL_FROM) {
    console.warn('⚠️ Email service not configured. Skipping email send.')
    return
  }
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #4d6aff; margin: 0;">IOPAWN</h1>
        <p style="color: #666; margin: 5px 0;">Fine Jewellery</p>
      </div>
      
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h2 style="color: #333; margin: 0 0 10px 0;">Thank you for your order!</h2>
        <p style="color: #666; margin: 0;">Your order has been confirmed and is being processed.</p>
      </div>
      
      <div style="background: white; border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
        <h3 style="color: #333; margin: 0 0 15px 0;">Order Details</h3>
        <p style="margin: 5px 0;"><strong>Order ID:</strong> <span style="color: #4d6aff;">#${orderId.toUpperCase()}</span></p>
        <p style="margin: 5px 0;"><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
      </div>
      
      <div style="background: white; border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
        <h3 style="color: #333; margin: 0 0 15px 0;">Items Ordered</h3>
        ${items.map(item => `
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
            <div>
              <p style="margin: 0; font-weight: 500;">${item.name}</p>
              <p style="margin: 5px 0 0 0; color: #666; font-size: 14px;">Quantity: ${item.quantity}</p>
            </div>
            <div style="text-align: right;">
              <p style="margin: 0; font-weight: 500;">$${(item.price / 100).toFixed(2)}</p>
            </div>
          </div>
        `).join("")}
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px 0; border-top: 2px solid #e0e0e0; margin-top: 10px;">
          <p style="margin: 0; font-weight: bold; font-size: 18px;">Total</p>
          <p style="margin: 0; font-weight: bold; font-size: 18px; color: #4d6aff;">$${(totalCents / 100).toFixed(2)}</p>
        </div>
      </div>
      
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #333; margin: 0 0 15px 0;">What's Next?</h3>
        <ul style="margin: 0; padding-left: 20px; color: #666;">
          <li>We'll process your order within 24 hours</li>
          <li>You'll receive shipping confirmation with tracking details</li>
          <li>Estimated delivery: 3-5 business days</li>
        </ul>
      </div>
      
      <div style="text-align: center; color: #666; font-size: 14px;">
        <p>If you have any questions, please contact us at support@iopawn.com</p>
        <p>Thank you for choosing IOPAWN!</p>
      </div>
    </div>
  `

  await resend.emails.send({
    from: process.env.EMAIL_FROM!,
    to: email,
    subject: `Order Confirmation - #${orderId.toUpperCase()}`,
    html,
  })
}
