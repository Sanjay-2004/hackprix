import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
    name: String, 
    email: String,
})

const User = mongoose.model("User", User);

export default User;