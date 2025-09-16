import express from "express";
import multer from "multer";
import { submitApplication, getAdmitCard } from "../controllers/applyController.js";

const router = express.Router();

// File upload setup with multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // save in /uploads
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Routes
router.post("/apply", upload.single("photo"), submitApplication);
router.get("/admit-card/:applicationNumber", getAdmitCard);

export default router;
