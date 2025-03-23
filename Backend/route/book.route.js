import express from "express";
import { getAllBooks, getFreeBooks, getPaidBooks } from "../controller/book.controller.js";
import { authenticateUser } from "../middleware/authMiddleware.js";

const router = express.Router();

// Get free books (accessible to everyone)
router.get("/free", getFreeBooks);

// Get all books (free + paid) for logged-in users
router.get("/", authenticateUser, getAllBooks);

// Get only paid books (for logged-in users)
router.get("/paid", authenticateUser, getPaidBooks);

export default router;

