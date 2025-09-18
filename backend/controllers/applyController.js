

import Application from "../model/applyModel.js";
import { v4 as uuidv4 } from "uuid";

export const submitApplication = async (req, res) => {
  try {
    console.log("Form data:", req.body);
    console.log("File uploaded:", req.file);

    const {
      name, email, phone, dob, class: studentClass,
      stream, district, state, collegeName, academicStream
    } = req.body;

    if (!name || !email || !phone || !dob || !studentClass || !district || !state || !collegeName || !academicStream) {
      return res.status(400).json({ message: "Please fill all required fields" });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Photo is required" });
    }

   // const photoPath = req.file.path;
    
    const photoPath = `/uploads/${req.file.filename}`;
    const applicationNumber = "APP-" + uuidv4().slice(0, 8).toUpperCase();

    const application = await Application.create({
      name,
      email,
      phone,
      dob,
      class: studentClass,
      stream: stream || "",
      district,
      state,
      collegeName,
      academicStream,
      photo: photoPath,
      applicationNumber
    });

    res.status(201).json({
      message: "Application submitted successfully",
      applicationNumber: application.applicationNumber
    });

  } catch (error) {
    console.error("Error in submitApplication:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};






export const getAdmitCard = async (req, res) => {
  try {
    const { applicationNumber } = req.params;
    const application = await Application.findOne({ applicationNumber });

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json({ application });
  } catch (error) {
    console.error("Error in getAdmitCard:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
