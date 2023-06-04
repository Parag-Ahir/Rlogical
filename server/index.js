import express, { json } from "express";
import { config } from "dotenv";
import connectDB from "./configs/db";
import authRoutes from "./routes/authRoutes";
import cors from "cors";

config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());

// Middleware
app.use(json());

// Routes
app.use("/auth", authRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
