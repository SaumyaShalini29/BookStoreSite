import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;
const URI = process.env.MongoDBURI;

if (!URI) {
  console.error("❌ MongoDB URI is missing in the .env file!");
  process.exit(1);
}

// Enable CORS & JSON parsing
app.use(cors());
app.use(express.json());

// Set Mongoose settings to avoid warnings
mongoose.set("strictQuery", false);

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1); // Exit process if connection fails
  }
};

connectDB();

// Handle MongoDB connection errors
mongoose.connection.on("error", (err) => {
  console.error("❌ MongoDB connection error:", err);
});

// Health check route to test if the server is running
app.get("/health", (req, res) => {
  res.status(200).json({ message: "✅ Server is running!" });
});

// Define Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
