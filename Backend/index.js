import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
 //import Contact from "../Frontend/src/Contact/Contact.jsx";
dotenv.config();

const app = express();
const PORT = process.env.PORT ;
const URI = process.env.MongoDBURI;

// ✅ Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json()); // ✅ Ensure JSON body parsing

// ✅ Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1); // Exit if unable to connect
  }
};
connectDB();

// ✅ Define Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// ✅ Contact API Route
//app.post("/api/contact", (req, res) => {
  //const { name, email, message } = req.body;

 // if (!name || !email || !message) {
    //return res.status(400).json({ error: "All fields are required" });
 // }

 // console.log("📩 New Contact Message:", req.body);
 // res.json({ success: "Message received successfully!" });
//});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
