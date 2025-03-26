import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; // ✅ Import JWT

const JWT_SECRET = "your_secret_key"; // ✅ Use a strong secret in environment variables

// Signup Controller
export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Ensure password is provided
    if (!password || password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const createdUser = new User({
      fullname,
      email,
      password: hashedPassword,
    });

    await createdUser.save();

    console.log("✅ User Registered:", createdUser);
    res.status(201).json({ message: "User registered successfully!", user: createdUser });

  } catch (error) {
    console.error("❌ Error signing up:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

// ✅ Fixed Login Controller (Added Token Generation)
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email }).select("+password"); // Ensure password is selected
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Debug: Print the stored user data (remove in production)
    console.log("User found:", user);

    // Ensure the password is hashed
    if (!user.password || user.password.length < 10) {
      return res.status(500).json({ message: "User data error. Please reset your password." });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // ✅ Generate JWT Token
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
      token, // ✅ Ensure token is included in the response
    });

  } catch (error) {
    console.error("❌ Login Error:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};
