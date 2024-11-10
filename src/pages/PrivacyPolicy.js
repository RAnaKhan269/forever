import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
      <p className="text-gray-600 mb-8">
        This Privacy Policy outlines how Forever collects, uses, and protects your information. By using our platform, you agree to the collection and use of information in accordance with this policy.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">1. Information Collection</h2>
        <p className="text-gray-600">
          We collect personal information you provide when creating an account, placing an order, or contacting us. This may include your name, email, address, and payment details. We may also collect data on your interactions with our platform for improvement purposes.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">2. Use of Information</h2>
        <p className="text-gray-600">
          The information we collect is used to fulfill orders, improve our services, and provide customer support. We may also use your information to send promotional offers and updates, which you can opt out of at any time.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">3. Data Protection</h2>
        <p className="text-gray-600">
          We take the security of your data seriously and implement various measures to protect your information from unauthorized access. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">4. Sharing Information</h2>
        <p className="text-gray-600">
          We do not sell or rent your personal information to third parties. We may share data with trusted partners to facilitate services, such as payment processing or delivery. These partners are required to maintain confidentiality and security of your data.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">5. Your Rights</h2>
        <p className="text-gray-600">
          You have the right to access, update, or delete your personal information. You can also manage communication preferences or withdraw consent where applicable. Contact us to exercise your rights.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">6. Changes to Privacy Policy</h2>
        <p className="text-gray-600">
          We may update our Privacy Policy periodically. Changes will be posted on this page, and we encourage you to review it regularly to stay informed.
        </p>
      </section>

      <section className="text-center mt-10">
        <p className="text-gray-600">
          If you have any questions about this Privacy Policy, please <a href="mailto:support@forever.com" className="text-blue-600 underline">contact us</a>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
