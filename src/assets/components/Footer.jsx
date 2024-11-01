import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-black text-white p-5 lg:p-10 flex flex-wrap justify-between items-center text-sm"
    >
      {/* Left Section */}
      <div className="flex-1 min-w-[200px] mb-5">
        <h2 className="font-bold text-lg">LeoDart</h2>
        <p>Global Trade Service</p>
        <p>GSTIN: 123QWRE56789</p>
        <p>📞 +91 987654321</p>
        <p>📧 contact@leodart.com</p>
      </div>

      {/* Center Section */}
      <div className="flex-1 min-w-[200px] mb-5">
        <ul className="list-none p-0 space-y-2">
          <li>About</li>
          <li>Marketplace</li>
          <li>FAQ</li>
        </ul>
      </div>

      {/* Social Media and App Store Icons */}
      <div className="flex-1 min-w-[200px] mb-5">
        <p>Follow Us</p>
        <div className="flex space-x-3 my-3">
          {/* Placeholder for Social Media Icons */}
          <span className="bg-gray-700 w-6 h-6 inline-block"></span>
          <span className="bg-gray-700 w-6 h-6 inline-block"></span>
          <span className="bg-gray-700 w-6 h-6 inline-block"></span>
          <span className="bg-gray-700 w-6 h-6 inline-block"></span>
        </div>
        <p>Download On</p>
        <div className="flex space-x-2 mt-2">
          {/* Placeholder for App Store Buttons */}
          <span className="bg-gray-700 w-24 h-10 inline-block"></span>
          <span className="bg-gray-700 w-24 h-10 inline-block"></span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full border-t border-gray-700 pt-5 flex justify-between items-center mt-5 text-xs">
        <p>© 2024 LeoDart. All Rights Reserved.</p>
        <div className="flex space-x-3">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
