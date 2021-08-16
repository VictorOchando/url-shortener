const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const url = require("./routes/url");

dotenv.config();

const PORT = process.env.PORT;
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
app.use(express.json());

app.use("/shorten", url);

app.listen(PORT, () => console.log("Server listening on port " + PORT));
