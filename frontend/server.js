require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

// Change this for your deployment
// Local: http://localhost:5000
// Separate EC2: http://<Backend-Public-IP>:5000
const API_URL = process.env.API_URL || "http://localhost:5000";

app.use(express.static(path.join(__dirname, "public")));

app.get("/config", (req, res) => {
    res.json({
        apiUrl: API_URL
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Frontend running on port ${PORT}`);
});
