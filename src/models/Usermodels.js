import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "Please provide a fullname"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    telephone: {
        type: Number,
        required: [true, "Please provide a telephone"],
    },
    custom: {
        type: String,
        required: [true, "Please provide a specification"],
    },
  

})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;