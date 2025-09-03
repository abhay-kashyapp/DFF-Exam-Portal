import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="container mx-auto px-6 text-center">
        {/* Foundation Name */}
        <h2 className="text-2xl font-bold text-white mb-2">
          Dream Forge Foundation (DFF)
        </h2>

        {/* Slogan */}
        <p className="italic text-blue-400 mb-2">
          "Forging Dreams into Reality – One Student at a Time"
        </p>

        {/* Motive / Description */}
        <p className="max-w-2xl mx-auto text-sm leading-relaxed">
          The Dream Forge Foundation Talent Benchmark Examination (DTBE) is 
          dedicated to empowering students, promoting fairness, and ensuring 
          equal opportunities for all. Our mission is to provide scholarships, 
          mentorship, and national-level recognition to nurture future leaders 
          and innovators across India.
        </p>

        {/* Bottom Bar */}
        <div className="text-center text-sm text-gray-500 mt-6 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} Dream Forge Foundation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
