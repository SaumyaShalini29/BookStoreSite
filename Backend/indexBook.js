import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const URI = process.env.MongoDBURI || "mongodb://localhost:27017/bookstore"; 

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));

const bookSchema = new mongoose.Schema({
  id: Number,
  name: String,
  title: String,
  price: Number,
  category: String,
  image: String,
});

const Book = mongoose.model("Book", bookSchema);

const books = [
  { id: 1, name: "Story Book", title: "vhjhabkbj", price: 0, category: "Free", image: "https://i.pinimg.com/736x/e3/bc/52/e3bc5233fc877d39998dd1c72ae5b7fa.jpg" },
  { id: 2, name: "Comedy Book", title: "vhjhabkbj", price: 0, category: "Free", image: "https://i.pinimg.com/736x/e3/bc/52/e3bc5233fc877d39998dd1c72ae5b7fa.jpg" },
  { id: 3, name: "Sports Book", title: "vhjhabkbj", price: 50, category: "Sports", image: "https://i.pinimg.com/736x/e3/bc/52/e3bc5233fc877d39998dd1c72ae5b7fa.jpg" },
  { id: 4, name: "Coding Book", title: "vhjhabkbj", price: 100, category: "Code", image: "https://i.pinimg.com/736x/e3/bc/52/e3bc5233fc877d39998dd1c72ae5b7fa.jpg" },
  { id: 5, name: "Food Book", title: "vhjhabkbj", price: 120, category: "Food", image: "https://i.pinimg.com/736x/e3/bc/52/e3bc5233fc877d39998dd1c72ae5b7fa.jpg" },
  { id: 6, name: "Historical Book", title: "vhjhabkbj", price: 150, category: "History", image: "https://i.pinimg.com/736x/e3/bc/52/e3bc5233fc877d39998dd1c72ae5b7fa.jpg" },
  { id: 7, name: "Autobiography Book", title: "vhjhabkbj", price: 200, category: "AutoBiography", image: "https://i.pinimg.com/736x/e3/bc/52/e3bc5233fc877d39998dd1c72ae5b7fa.jpg" },
  { id: 8, name: "Religious Book", title: "vhjhabkbj", price: 250, category: "Religious", image: "https://i.pinimg.com/736x/e3/bc/52/e3bc5233fc877d39998dd1c72ae5b7fa.jpg" },
];

// Insert books into MongoDB
const insertBooks = async () => {
  try {
    await Book.insertMany(books);
    console.log("✅ Books inserted successfully!");
  } catch (err) {
    console.error("❌ Error inserting books:", err);
  } finally {
    mongoose.connection.close();
  }
};

insertBooks();
