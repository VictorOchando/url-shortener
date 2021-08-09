const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const port = process.env.PORT;
const DB_URI = process.env.DB_URI;

mongoose.connect(
    DB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log("DB connected");
    }
);

app.get("/short", (req, res) => {
    res.send("This is the /short url");
});

app.listen(port, () => console.log("Server listening on port 3000"));
