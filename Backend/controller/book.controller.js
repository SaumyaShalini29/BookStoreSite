import Book from "../model/book.model.js"; 
import jwt from "jsonwebtoken";

export const getBook = async (req, res) => {
  try {
    let books;
    const token = req.headers.authorization?.split(" ")[1]; // ✅ Extract token

    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("✅ Authenticated User:", decoded);
        books = await Book.find(); // ✅ Return all books (Free + Paid)
      } catch (error) {
        console.error("❌ Invalid Token:", error.message);
        return res.status(401).json({ message: "Invalid token. Please login again." });
      }
    } else {
      console.log("🔒 No Token: Returning only Free books.");
      books = await Book.find({ category: "Free" }); // ✅ Return only Free books
    }

    res.status(200).json(books);
  } catch (error) {
    console.error("❌ Error fetching books:", error);
    res.status(500).json({ message: "Error fetching books", error: error.message });
  }
};
