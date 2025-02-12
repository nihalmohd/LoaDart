import React from 'react'

const TermsAndPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Terms & Conditions and Privacy Policy</h1>
      
      {/* Navigation Links */}
      <nav className="mb-6">
        <ul className="flex gap-6 justify-center text-blue-500">
          <li><a href="#terms">Terms & Conditions</a></li>
          <li><a href="#privacy">Privacy Policy</a></li>
        </ul>
      </nav>
      
      {/* Terms & Conditions Section */}
      <section id="terms" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Terms and Conditions</h2>
        <p><strong>Introduction:</strong> Welcome to LoaDart, an aggregator platform in the Indian logistics market. By using our mobile application, you agree to comply with and be bound by the following terms and conditions...</p>
        <p><strong>Definitions:</strong> "Platform" refers to the LoaDart mobile application. "User" refers to any individual or entity using the Platform, including drivers, transporters, lorry brokers, and shippers.</p>
        <p><strong>Service:</strong> The platform allows users to create profiles, post/search loads, find trucks, and connect with other users.</p>
        <p><strong>User Responsibilities:</strong> Users must provide accurate details and verify the authenticity of others.</p>
        <p><strong>Platform Responsibilities:</strong> LoaDart is an aggregator and does not verify user-posted information.</p>
        <p><strong>User Conduct:</strong> Users must comply with laws and refrain from fraudulent activities.</p>
        <p><strong>Termination:</strong> LoaDart can suspend accounts for violations, false information, or misuse.</p>
        <p><strong>Limitation of Liability:</strong> LoaDart is not liable for any damages arising from platform use.</p>
        <p><strong>Changes to Terms:</strong> LoaDart may update these terms at any time.</p>
        <p><strong>Governing Law:</strong> These terms are governed by Indian laws.</p>
        <p><strong>Contact:</strong> For inquiries, email [contact email].</p>
      </section>
      
      {/* Privacy Policy Section */}
      <section id="privacy" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Privacy Policy</h2>
        <p><strong>Introduction:</strong> This Privacy Policy outlines how LoaDart collects, uses, and protects user data.</p>
        <p><strong>Data Collection:</strong> We collect personal information (name, email, phone, location) and usage data.</p>
        <p><strong>Data Usage:</strong> Your data is used to provide and improve services, connect users, and resolve disputes.</p>
        <p><strong>Data Sharing:</strong> We do not sell user data but may share it with service providers.</p>
        <p><strong>Data Security:</strong> We implement security measures, but no system is completely secure.</p>
        <p><strong>User Rights:</strong> Users can update/delete profiles and request data access.</p>
        <p><strong>Policy Updates:</strong> We may update this policy, with notifications on the platform.</p>
        <p><strong>Contact:</strong> For privacy queries, email [contact email].</p>
      </section>
    </div>
  )
}

export default TermsAndPolicy