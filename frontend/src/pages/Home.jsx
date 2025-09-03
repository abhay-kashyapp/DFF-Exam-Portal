
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-purple-50 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
          Dream Forge Foundation <br /> Talent Benchmark Examination (DTBE)
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-8 opacity-90">
          Empowering Students, Forging Futures.  
          A national platform for fairness, transparency, and holistic student growth.  
          Designed to evaluate conceptual understanding, problem-solving, and critical reasoning.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Link
            to="/apply"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-gray-100 transition transform hover:scale-105"
          >
            🚀 Apply Now
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition transform hover:scale-105"
          >
            ℹ️ Learn More
          </Link>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6 py-16">
        {/* Key Dates */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <h3 className="text-2xl font-bold mb-4 text-blue-600">📅 Key Dates</h3>
          <ul className="text-gray-700 space-y-2">
            <li>✅ Application Start: <b>15 September 2025</b></li>
            <li>✅ Application Close: <b>15 November 2025</b></li>
            <li>✅ Exam Date: <b>December (any date)</b></li>
            <li>🎯 Target Group: Classes 9–12 (Science, Arts, Commerce)</li>
          </ul>
        </div>

        {/* Awards */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
          <h3 className="text-2xl font-bold mb-4 text-purple-600">🏆 Awards</h3>
          <ul className="text-gray-700 space-y-2">
            <li>🥇 1st Prize – ₹10,000</li>
            <li>🥈 2nd Prize – ₹5,000</li>
            <li>🥉 3rd Prize – ₹2,500</li>
            <li>🎖 5 Students – ₹1,000 each</li>
          </ul>
        </div>

        {/* Scholarship */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 rounded-2xl shadow-lg md:col-span-2 text-white hover:shadow-2xl transition transform hover:-translate-y-2">
          <h3 className="text-2xl font-bold mb-4">🎓 Scholarships & Mentorship</h3>
          <p className="text-base leading-relaxed">
            The <b>top 2%</b> of students per district receive annual scholarships 
            (₹20,000 – ₹30,000) for up to 3 years.  
            The <b>top 20%</b> gain access to mentorship programs with faculty 
            from <b>IITs, DU, JNU, IISER</b>, and other premier institutions.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
