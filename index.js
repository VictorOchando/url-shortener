const express = require("express");
const app = express();

app.get("/short", (req, res) => {
    res.send("This is the /short url");
});

app.listen(3000, () => console.log("Server listening on port 3000"));
