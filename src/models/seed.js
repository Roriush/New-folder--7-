import mongoose from "mongoose";
import connectToDB from "./db";
import  data from "./ database/ data.js";
connectToDB ();

const generateAuthors = () => {
    const authors = [];
    for (let i = 0; i < 10; i++) {
        const author = {
            name: `Author ${i}`,
            email: `author${i}@example.com`
            };
            authors.push(author);
            }
            return authors;
            };

seedDatabase ()