export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-sm leading-6">
      <h1 className="text-xl font-bold mb-4">Privacy Policy</h1>
      <p>MOH AI TECH is committed to protecting your data and privacy. This policy outlines what we collect and how we use it.</p>

      <h2 className="font-semibold mt-4">1. Information We Collect</h2>
      <ul className="list-disc ml-6">
        <li>Basic user info (name, email) via Firebase Auth</li>
        <li>Prompt inputs and tool usage logs</li>
        <li>We do not permanently store personal files</li>
      </ul>

      <h2 className="font-semibold mt-4">2. How We Use Your Data</h2>
      <p>To improve service quality, monitor usage, and apply usage limits.</p>

      <h2 className="font-semibold mt-4">3. Data Sharing</h2>
      <p>We never share or sell your data to any third party. Anonymous data may be used for improvements.</p>

      <h2 className="font-semibold mt-4">4. Cookies</h2>
      <p>We use cookies only for login and session tracking.</p>

      <h2 className="font-semibold mt-4">5. Contact</h2>
      <p>Email: moh.aitech@gmail.com</p>
    </div>
  );
}
