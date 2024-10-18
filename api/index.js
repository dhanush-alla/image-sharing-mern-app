// Add the server code here
const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
});


const port = 8800;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;