import React from 'react';

const Footer = () => {
  return (
    <div className="py-8 px-4 md:px-8 lg:px-16 bg-violet-800 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold mb-4">10 Yoga Poses to Make Your Body Fall-Proof</h2>
          <p className="text-sm mb-2">© {new Date().getFullYear()} Gentle Stretching. All Rights Reserved.</p>
          <p className="text-xs">This is a clone site created for demonstration purposes only.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center text-xs text-center space-y-2 md:space-y-0 md:space-x-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Contact Us</a>
          <a href="#" className="hover:underline">FAQ</a>
          <a href="#" className="hover:underline">Disclaimer</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
