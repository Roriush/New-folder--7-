import mongoose from 'mongoose';

const uri = "mongodb://localhost:27017/";

const book schema = new mongoose.Schema({
    title: String,
    author: String,
    price: Number,
    id: Number
    });

const Book = mongoose.model('Book', bookSchema);
async function connect MongoDB() {
    console.log ('Connecting to MongoDB...');
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
        // const book = new Book({
        //     title: "The Great Gatsby",
        //     author: "F. Scott Fitzgerald",
        //     price: 15.99,
        //     id: 1
        //     });
            // await book.save();
            // console.log("Book saved");
            await mongoose.connect (uri, { useNewUrlParser: true, useUnifiedTopology: true });
            console.log("Connected to MongoDB");
            const books = await Book.find();
            console.log(books);
            
            } catch (err) {
                console.error(error.message);
                }
                finally {
                    await mongoose.disconnect();
                    console.log("Connection closed");
 }
                main().catch(console.error)
