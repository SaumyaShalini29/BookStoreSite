import mongoose from "mongoose";

// User Schema
const userSchema = new mongoose.Schema({
    fullname: { type: String, required: true }, // Ensure it's 'name' not 'fullname'
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User; // ✅ Correct Export
