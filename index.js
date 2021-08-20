const express = require("express");
var cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const url = require("./routes/url");
const redirect = require("./routes/redirect");

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
app.use(cors());
app.use(express.json());

app.use("/shorten", url);
app.use("/", redirect);

app.listen(PORT, () => console.log("Server listening on port " + PORT));
