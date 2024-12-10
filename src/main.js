import express from 'express';
import config from './config.js';
import connectToDB from './connect.js';


const app = express();
    connectToDB()
app.listen(config.PORT, () => {
    console.log(`Listening on ${config.PORT}`)
});
