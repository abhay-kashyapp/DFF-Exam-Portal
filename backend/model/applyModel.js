
import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  dob: { type: Date, required: true },
  class: { type: String, required: true },
  stream: { type: String }, // optional for classes 9-10
  district: { type: String, required: true },
  state: { type: String, required: true },
  collegeName: { type: String, required: true },
  academicStream: { type: String, required: true },
  photo: { type: String, required: true },
  applicationNumber: { type: String, required: true, unique: true },
}, { timestamps: true });

export default mongoose.model("Application", applicationSchema);
