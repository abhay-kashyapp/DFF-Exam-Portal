import React from "react";

function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg italic text-blue-100">
          "Forging Dreams into Reality – One Student at a Time"
        </p>
        <p className="text-md mt-2">We are here to help you with any queries</p>
      </section>

      {/* Contact Information */}
      <section className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Dream Forge Foundation (DFF)</h2>
          <p className="mb-2"><strong>Head Office:</strong> New Delhi, India</p>
          <p className="mb-2"><strong>Zonal Office:</strong> Kanpur, UP</p>
          <p className="mb-2"><strong>📞 Helpline:</strong> +91-78xxxxxxxx</p>

          <h3 className="text-xl font-bold mt-6 mb-2">Key Contacts</h3>
          <ul className="space-y-2">
            <li>🎓 <strong>Exam Controller:</strong> Soumya Ranjan Nanda (Hindu College, DU)</li>
            <li>📌 <strong>Chief Coordinator:</strong> Vishal Mishra (MBA Student)</li>
            <li>💬 <strong>Support Team:</strong> Abhijeet (Allahabad University) & Harshit Tiwari (B-Tech CSE)</li>
            <li>🏫 <strong>Exam Centres Coordinator:</strong> Dipak Rajput</li>
          </ul>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <img
            src="https://source.unsplash.com/500x400/?contact,students,education"
            alt="Contact Team"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Visit Us</h2>
          <p className="text-gray-600 mb-6">
            Our offices are always open for students and parents.  
            Feel free to reach out for guidance, mentorship, or exam details.
          </p>
          <img
            src="https://source.unsplash.com/1000x400/?university,building,campus"
            alt="Office Location"
            className="rounded-xl shadow-lg mx-auto"
          />
        </div>
      </section>
    </div>
  );
}

export default Contact;
