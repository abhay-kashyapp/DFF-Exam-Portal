

import express from "express";
import multer from "multer";
import { submitApplication, getAdmitCard } from "../controllers/applyController.js";

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// Routes
router.post("/", upload.single("photo"), submitApplication);
router.get("/admit-card/:applicationNumber", getAdmitCard);
router.get("/:applicationNumber", getAdmitCard);


export default router;
