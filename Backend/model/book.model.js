import mongoose from "mongoose"; 

// Book Schema
const bookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    title: { type: String, required: true }
}, { timestamps: true });

const Book = mongoose.model("Book", bookSchema);
export default Book; // ✅ Correct Export
