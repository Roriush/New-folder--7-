import mongoose from "mongoose";
import data from "../database/data.js"

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 0,
        required: true
    },
    bio: {
        type: String,
        required: true
    }
});

const Author = mongoose.model('Author', authorSchema);
export default Author;