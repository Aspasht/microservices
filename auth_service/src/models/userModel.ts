import mongoose from "mongoose";


var userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
}, { timestamps: true });


///////////////////////////////

// Need to hash the password before saving to the database.

//////////////////////////


