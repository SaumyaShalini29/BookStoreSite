import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,  // Fixed typo
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true }); // Auto-adds createdAt & updatedAt fields

// Prevent model overwriting
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
