import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    dob: { type: Date, required: true },
    class: { type: String, required: true },
    stream: { type: String }, // only for class 11-12
    district: { type: String, required: true },
    state: { type: String, required: true },
    collegeName: { type: String, required: true },
    academicStream: { type: String, required: true },
    photo: { type: String, required: false }, // file path from multer
    applicationNumber: { type: String, unique: true }, // auto-generated
  },
  { timestamps: true }
);

const Application = mongoose.model("Application", applicationSchema);
export default Application;
 