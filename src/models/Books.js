import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: String,
    pages: {
        type: Number,
        min: 1,
        required: true
        },
     author: String, {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'Author',
     required: true
    },
    genre: String,
    price: Number,
    published: Date

    });

    const Book = mongoose.model('Book', bookSchema);
    module.exports = Book;
    