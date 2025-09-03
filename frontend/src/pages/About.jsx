import React from "react";

function About() {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-purple-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">About DTBE</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Empowering Students, Forging Futures
        </p>
      </section>

      {/* About the Exam */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">📘 About the Exam</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The <strong className="text-purple-600">Dream Forge Foundation (DFF) Talent Benchmark Examination (DTBE)</strong> 
          is a pioneering initiative aimed at fostering merit, equity, and holistic 
          development among school students across India. It not only tests conceptual 
          understanding but also real-life application, critical reasoning, and 
          problem-solving skills.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          With separate syllabi for Classes 9–10 and Classes 11–12, DTBE ensures 
          age-appropriate rigor. It emphasizes <span className="font-semibold text-blue-600">
          interdisciplinary learning</span> across Mathematics, Science, and Humanities.
        </p>
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-lg shadow-md">
          Beyond exams, DTBE provides mentorship, scholarships, and career guidance.  
          <strong className="text-purple-700">Top 20% students</strong> receive mentorship and the  
          <strong className="text-blue-700"> top 2%</strong> secure scholarships with long-term academic support.
        </div>
      </section>

      {/* Scholarship & Mentorship */}
      <section className="bg-gradient-to-r from-purple-50 to-blue-50 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-purple-700 mb-6">
            🎓 Scholarship & Mentorship Program
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-l-4 border-blue-500 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                Scholarship Awardees (Top 2%)
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>💰 ₹20,000 – ₹30,000 per year for up to 3 years</li>
                <li>🎯 Priority for Economically Weaker Section (EWS) students</li>
                <li>📖 Continuity based on performance</li>
                <li>✅ Transparent disbursement</li>
              </ul>
            </div>

            <div className="bg-white border-l-4 border-purple-500 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-purple-600 mb-2">
                Mentorship Awardees (Top 20%)
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>👨‍🏫 Guidance from IITs, DU, JNU, BHU, IISER alumni</li>
                <li>📚 Training for NEET, JEE, CUET, UPSC, etc.</li>
                <li>🌍 Networking & peer learning</li>
                <li>📊 Regular evaluations & progress reviews</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why DTBE */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-blue-700 mb-6">🌟 Why DTBE?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-blue-100 to-white p-6 rounded-lg shadow-md">
            📊 <strong>Transparent Evaluation</strong> – Advanced scoring system minimizes guesswork.
          </div>
          <div className="bg-gradient-to-r from-purple-100 to-white p-6 rounded-lg shadow-md">
            🌍 <strong>Equal Opportunity</strong> – Bridging rural & urban education gaps.
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-white p-6 rounded-lg shadow-md">
            💡 <strong>Support for EWS</strong> – Ensures financial challenges don’t block talent.
          </div>
          <div className="bg-gradient-to-r from-purple-100 to-white p-6 rounded-lg shadow-md">
            🏆 <strong>National Recognition</strong> – Exposure to India’s top institutions.
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-white p-6 rounded-lg shadow-md md:col-span-2">
            🤝 <strong>Direct Mentorship</strong> – Learn from IITs, JNU, DU, IISER & more.
          </div>
        </div>
        <p className="mt-8 text-center font-medium text-gray-800">
          DTBE is not just an exam — it is a <span className="text-purple-600">bridge between potential and opportunity</span>,  
          empowering the next generation of thinkers, leaders, and innovators.
        </p>
      </section>
    </div>
  );
}

export default About;
