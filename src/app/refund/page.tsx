export default function RefundPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-sm leading-6">
      <h1 className="text-xl font-bold mb-4">Refund & Cancellation Policy</h1>
      <p>Thank you for using MOH AI TECH. Please review our refund terms below:</p>

      <h2 className="font-semibold mt-4">1. Digital Services</h2>
      <p>Since tools provide instant output, refunds are not provided after tool access.</p>

      <h2 className="font-semibold mt-4">2. Exceptions</h2>
      <ul className="list-disc ml-6">
        <li>Double payments</li>
        <li>Charged but service didn’t load</li>
      </ul>

      <h2 className="font-semibold mt-4">3. Subscription Cancellation</h2>
      <p>You can cancel anytime, and your Pro access continues until the current billing cycle ends. No partial refunds.</p>

      <h2 className="font-semibold mt-4">4. Contact</h2>
      <p>Email: moh.aitech@gmail.com</p>
    </div>
  );
}
