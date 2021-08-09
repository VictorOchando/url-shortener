const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

app.get("/short", (req, res) => {
    res.send("This is the /short url");
});

app.listen(process.env.PORT, () =>
    console.log("Server listening on port 3000")
);
