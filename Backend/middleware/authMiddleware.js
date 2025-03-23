import jwt from "jsonwebtoken";

export const authenticateUser = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Extract token

  if (!token) {
    return res.status(401).json({ message: "Access Denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
    req.user = decoded; // Attach user data to request
    next();
  } catch (error) {
    console.error("JWT Error:", error.message);
    return res.status(401).json({ message: "Invalid or Expired Token" });
  }
};
