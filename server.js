const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "Fixware technology is best"
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
