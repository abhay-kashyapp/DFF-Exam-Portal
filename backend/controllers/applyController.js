// import Application from "../models/Application.js";
import Application from "../model/applyModel.js";
import multer from "multer";
import { v4 as uuidv4 } from "uuid"; // generate unique application number

// @desc Submit new application
export const submitApplication = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      dob,
      class: studentClass,
      stream,
      district,
      state,
      collegeName,
      academicStream,
    } = req.body;

    // file path from multer upload
    const photo = req.file ? req.file.path : null;

    if (!photo) {
      return res.status(400).json({ message: "Photo is required" });
    }

    const applicationNumber = "APP-" + uuidv4().slice(0, 8).toUpperCase();

    const application = await Application.create({
      name,
      email,
      phone,
      dob,
      class: studentClass,
      stream,
      district,
      state,
      collegeName,
      academicStream,
      photo,
      applicationNumber,
    });

    res.status(201).json({
      message: "Application submitted successfully",
      application,
    });
  } catch (error) {
    console.error("Error saving application:", error);
    res.status(500).json({ message: "Server error", error });
  }
};



// @desc Get application details by application number
export const getAdmitCard = async (req, res) => {
  try {
    const { applicationNumber } = req.params;

    const application = await Application.findOne({ applicationNumber });

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json({ application });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
