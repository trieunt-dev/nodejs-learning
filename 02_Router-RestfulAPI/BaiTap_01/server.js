const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'));
})

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "views/login.html"));
})

app.get("/download", (req, res) => {
    res.download('public/images/logo.png');
})

app.listen(3000);