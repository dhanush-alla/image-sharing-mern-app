import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'


const app = express();


dotenv.config();


mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
});


const port = 8800;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

