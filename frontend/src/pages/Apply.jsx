
import React, { useState } from "react";

function Apply() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    class: "",
    stream: "",
    district: "",
    state: "",
    collegeName: "",
    academicStream: "",
    dob: "",
    photo: null,
  });

  const [photoPreview, setPhotoPreview] = useState(null);
  const [applicationNumber, setApplicationNumber] = useState(null); // ✅ Store app number
  const [loading, setLoading] = useState(false); // Optional loading state

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle photo upload
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, photo: file });
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setApplicationNumber(null); // Reset previous number

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const res = await fetch("http://localhost:5000/api/apply", {
        method: "POST",
        body: formDataToSend,
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("Server error response:", text);
        throw new Error("Server error");
      }

      const data = await res.json();
      setApplicationNumber(data.applicationNumber); // ✅ show app number

      // Optionally reset the form
      setFormData({
        name: "",
        email: "",
        phone: "",
        class: "",
        stream: "",
        district: "",
        state: "",
        collegeName: "",
        academicStream: "",
        dob: "",
        photo: null,
      });
      setPhotoPreview(null);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong while submitting the form!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Apply for DTBE</h1>
        <p className="text-lg italic">
          "Forging Dreams into Reality – One Student at a Time"
        </p>
      </section>

      {/* Application Form */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Application Form
        </h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md space-y-4"
        >
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block mb-1 font-medium">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Class */}
          <div>
            <label className="block mb-1 font-medium">Class</label>
            <select
              name="class"
              value={formData.class}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="">Select Class</option>
              <option value="9">Class 9</option>
              <option value="10">Class 10</option>
              <option value="11">Class 11</option>
              <option value="12">Class 12</option>
            </select>
          </div>

          {/* Stream (Only for class 11–12) */}
          {(formData.class === "11" || formData.class === "12") && (
            <div>
              <label className="block mb-1 font-medium">Stream</label>
              <select
                name="stream"
                value={formData.stream}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="">Select Stream</option>
                <option value="Science">Science</option>
                <option value="Commerce">Commerce</option>
                <option value="Arts">Arts</option>
              </select>
            </div>
          )}

                   {/* District */}
          <div>
            <label className="block mb-1 font-medium">District</label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* State */}
          <div>
            <label className="block mb-1 font-medium">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* College Name */}
          <div>
            <label className="block mb-1 font-medium">College Name</label>
            <input
              type="text"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
              placeholder="Enter your college name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Academic Stream */}
          <div>
            <label className="block mb-1 font-medium">Academic Stream</label>
            <input
              type="text"
              name="academicStream"
              value={formData.academicStream}
              onChange={handleChange}
              placeholder="e.g., CBSE, ICSE, State Board, Open School"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Photograph Upload */}
          <div>
            <label className="block mb-1 font-medium">Upload Photograph</label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={handlePhotoChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            {photoPreview && (
              <img
                src={photoPreview}
                alt="Preview"
                className="mt-3 h-32 w-32 object-cover rounded-lg border"
              />
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>

          {/* Show application number */}
          {applicationNumber && (
            <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg text-center">
              ✅ Application submitted successfully! <br />
              Your Application Number: <strong>{applicationNumber}</strong>
            </div>
          )}
        </form>
      </section>
    </div>
  );
}

export default Apply;
