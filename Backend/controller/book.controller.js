import Book from "../model/book.model.js"; // Ensure correct model import

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find(); // Fetch all books
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Error fetching books" });
  }
};

export const getFreeBooks = async (req, res) => {
  try {
    const freeBooks = await Book.find({ isPaid: false }); // Fetch only free books
    res.status(200).json(freeBooks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching free books" });
  }
};

export const getPaidBooks = async (req, res) => {
  try {
    const paidBooks = await Book.find({ isPaid: true }); // Fetch only paid books
    res.status(200).json(paidBooks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching paid books" });
  }
};
