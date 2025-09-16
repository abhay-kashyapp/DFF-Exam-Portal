import React, { useState } from "react";

function AdmitCard() {
  const [appNumber, setAppNumber] = useState("");
  const [admitCard, setAdmitCard] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();

    // 🔹 Demo: Normally you'd fetch from backend using appNumber
    if (appNumber === "DTBE20251234") {
      setAdmitCard({
        name: "Rahul Sharma",
        class: "12",
        stream: "Science",
        district: "Lucknow",
        state: "UP",
        dob: "2007-05-21",
        college: "ABC Public School",
      });
    } else {
      alert("No admit card found for this Application Number!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Download Admit Card</h1>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="space-x-3 mb-6">
        <input
          type="text"
          placeholder="Enter Application Number"
          value={appNumber}
          onChange={(e) => setAppNumber(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Admit Card Display */}
      {admitCard && (
        <div className="bg-white shadow-lg rounded-lg p-6 w-[500px]">
          <h2 className="text-xl font-bold text-center mb-4">DTBE Admit Card</h2>
          <p><strong>Application No:</strong> {appNumber}</p>
          <p><strong>Name:</strong> {admitCard.name}</p>
          <p><strong>DOB:</strong> {admitCard.dob}</p>
          <p><strong>Class:</strong> {admitCard.class}</p>
          <p><strong>Stream:</strong> {admitCard.stream}</p>
          <p><strong>College:</strong> {admitCard.college}</p>
          <p><strong>District:</strong> {admitCard.district}</p>
          <p><strong>State:</strong> {admitCard.state}</p>

          <div className="mt-4 text-center">
            <button
              onClick={() => window.print()}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
            >
              Download Admit Card
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdmitCard;
