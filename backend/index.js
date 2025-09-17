import dotenv from "dotenv";
dotenv.config();
import express from "express";
// import cors from "cors";
import db from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./routes/authRouter.js";
import applyRouter from "./routes/applyRouter.js";


const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  credentials: true,
}));

// Routes
app.use("/api/auth", authRouter);
app.use("/api/auth", applyRouter); // ✅ mount under same prefix

// Default route (optional test)
app.get("/", (req, res) => {
  res.send("API is running...");
});



// frontend and backend is connected




// Start server only after DB connects
const port = process.env.PORT || 5000;
db()
  .then(() => {
    app.listen(port, () => {
      console.log(`✅ Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to MongoDB:", err);
  });
