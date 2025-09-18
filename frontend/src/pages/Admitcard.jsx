
import React, { useState } from "react";

function AdmitCard() {
  const [appNumber, setAppNumber] = useState("");
  const [admitCard, setAdmitCard] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:5000/api/apply/admit-card/${appNumber}`);
      if (!res.ok) {
        setAdmitCard(null);
        alert("No admit card found for this Application Number!");
        return;
      }

      const data = await res.json();
      setAdmitCard(data.application);
    } catch (error) {
      console.error("Error fetching admit card:", error);
      alert("Something went wrong while fetching admit card!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Download Admit Card</h1>

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="flex space-x-3 mb-6"
      >
        <input
          type="text"
          placeholder="Enter Application Number"
          value={appNumber}
          onChange={(e) => setAppNumber(e.target.value)}
          className="px-4 py-2 border rounded-lg w-72 focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Admit Card */}
      {admitCard && (
        <div className="bg-white shadow-2xl border border-gray-300 rounded-xl p-6 w-[700px]">
          {/* Header */}
          <div className="flex items-center justify-between border-b-2 pb-3 mb-4">
            <div>
              <h2 className="text-2xl font-bold text-blue-700">DTBE Examination Board</h2>
              <p className="text-sm text-gray-600">Official Admit Card</p>
            </div>
            <img
              src="https://via.placeholder.com/80"
              alt="Board Logo"
              className="w-20 h-20"
            />
          </div>

          {/* Candidate Info */}
          <div className="flex justify-between mb-6">
            <div>
              <p><strong>Application No:</strong> {admitCard.applicationNumber}</p>
              <p><strong>Name:</strong> {admitCard.name}</p>
              <p><strong>DOB:</strong> {admitCard.dob}</p>
              <p><strong>Class:</strong> {admitCard.class}</p>
              <p><strong>Stream:</strong> {admitCard.stream}</p>
            </div>
            <div className="text-center">
              <div className="w-28 h-32 border border-gray-400 mb-2 mx-auto flex items-center justify-center text-sm text-gray-500">
                Photo
              </div>
              <p className="text-xs text-gray-600">Candidate's Photo</p>
            </div>
          </div>

          {/* Academic Info */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <p><strong>College:</strong> {admitCard.collegeName}</p>
            <p><strong>District:</strong> {admitCard.district}</p>
            <p><strong>State:</strong> {admitCard.state}</p>
            <p><strong>Exam Date:</strong> 12th Oct 2025</p>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center mt-8">
            <div className="text-center">
              <div className="border-t-2 border-gray-500 w-40 mx-auto"></div>
              <p className="text-sm">Candidate Signature</p>
            </div>
            <div className="text-center">
              <div className="border-t-2 border-gray-500 w-40 mx-auto"></div>
              <p className="text-sm">Controller of Examination</p>
            </div>
          </div>

          {/* Print Button */}
          <div className="mt-6 text-center">
            <button
              onClick={() => window.print()}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
            >
              Download / Print Admit Card
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdmitCard;


