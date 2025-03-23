import User from "../model/user.model.js"; // Ensure this path is correct
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    console.log("📩 Signup Request Body:", req.body); // ✅ Debugging Log

    const { name, email, password } = req.body; // Changed 'fullname' to 'name'

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password before saving
    const hashPassword = await bcryptjs.hash(password, 10);

    const newUser = new User({
      name, // Changed from 'fullname'
      email,
      password: hashPassword,
    });

    await newUser.save();

    console.log("✅ User Registered:", newUser);
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("❌ Error signing up:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};
