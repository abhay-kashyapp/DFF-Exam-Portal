
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import db from "./config/db.js";
import authRouter from "./routes/authRouter.js";
import applyRouter from "./routes/applyRouter.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Routes
app.use("/api/auth", authRouter);
app.use("/api/apply", applyRouter);
app.use("/api/admit-card", applyRouter);

// Default route for testing
app.get("/", (req, res) => res.send("API is running..."));

// Start server after DB connects
const port = process.env.PORT || 5000;
db()
  .then(() => app.listen(port, () => console.log(`Server running on port ${port}`)))
  .catch(err => console.error("Failed to connect to MongoDB:", err));



  