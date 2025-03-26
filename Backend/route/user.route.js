import express from "express";
import { signup, login } from "../controller/user.controller.js"; // ✅ Fixed Import Path
import { authMiddleware } from "../middleware/authMiddleware.js"; // ✅ Correct Import

const router = express.Router();

// ✅ Test Route
router.get("/test", (req, res) => {
  res.send("User route is working!");
});

// ✅ User Signup
router.post("/signup", signup);

// ✅ User Login (Removed authMiddleware)
router.post("/login", login);

// ✅ Example of a protected route
router.get("/protected", authMiddleware, (req, res) => {
  res.status(200).json({ message: "Protected route accessed!", user: req.user });
});

export default router;

