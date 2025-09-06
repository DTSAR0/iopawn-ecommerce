import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ReturnsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-light text-silver-900 mb-4">Returns & Refunds</h1>
          <p className="text-silver-600 text-lg">
            We want you to love your IOPAWN jewelry. If you're not completely satisfied, 
            you have 14 days from delivery to return your purchase for a full refund.
          </p>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">How to Return</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-2 list-decimal list-inside text-silver-700">
                <li>Contact us at <a href="mailto:info@iopawn.com" className="text-primary hover:underline">info@iopawn.com</a> to initiate your return</li>
                <li>Ship items back within 14 days of your withdrawal notice</li>
                <li>Keep the tamper-evident tag intact (unless item is defective)</li>
                <li>Include your order number and reason for return</li>
                <li>We'll process your refund within 14 days of receiving your return</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">What's Not Returnable</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-silver-700">
                <li>Personalized or engraved items</li>
                <li>Pierced earrings once the hygiene seal is broken</li>
                <li>Items without the original tamper-evident tag (unless defective)</li>
                <li>Items returned after 14 days from delivery</li>
                <li>Items showing signs of wear or damage not present at delivery</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Refunds & Processing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium text-silver-900 mb-2">Refund Timeline</h3>
                <p className="text-silver-700">
                  We'll refund your original payment method within 14 days of receiving your return. 
                  Standard delivery costs are included in your refund, but express shipping upgrades are not.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-silver-900 mb-2">Return Shipping</h3>
                <p className="text-silver-700">
                  You are responsible for return shipping costs unless the item is defective. 
                  We recommend using tracked shipping to ensure your return reaches us safely.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Legal Warranty</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-silver-700">
                All jewelry comes with a 2-year legal warranty against defects. We'll repair or replace 
                defective items first, or offer a refund or price reduction if repair isn't possible. 
                This warranty covers manufacturing defects and does not include normal wear and tear.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-medium text-silver-900 mb-2">How long do I have to return an item?</h3>
                <p className="text-silver-700">
                  You have 14 days from delivery to notify us of your return and another 14 days to ship the item back.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-silver-900 mb-2">Can I return pierced earrings?</h3>
                <p className="text-silver-700">
                  Only if they're defective. Once the hygiene seal is broken, pierced earrings cannot be returned 
                  for hygiene reasons.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-silver-900 mb-2">What if my item arrives damaged?</h3>
                <p className="text-silver-700">
                  Contact us immediately with photos. We'll arrange a replacement or full refund, 
                  including return shipping costs.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-silver-900 mb-2">Can I exchange an item for a different size?</h3>
                <p className="text-silver-700">
                  Yes! Contact us to arrange an exchange. You'll need to return the original item first, 
                  and we'll send the new size once we receive it.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-silver-900 mb-2">What if I lose the tamper-evident tag?</h3>
                <p className="text-silver-700">
                  Items without the original tag can only be returned if they're defective. 
                  Please keep all original packaging and tags until you're sure you want to keep the item.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Need Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-silver-700 mb-4">
                If you have any questions about returns or need assistance, please don't hesitate to contact us.
              </p>
              <div className="space-y-2">
                <p className="text-silver-700">
                  <strong>Email:</strong> <a href="mailto:info@iopawn.com" className="text-primary hover:underline">info@iopawn.com</a>
                </p>
                <p className="text-silver-700">
                  <strong>Response time:</strong> We typically respond within 24 hours
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
