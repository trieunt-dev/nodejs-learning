const express = require('express');
const router = express.Router();

router.get('/javascript/bai1', (req, res) => {
    res.json('“Welcome bạn đến Javascript Bài 1!');
});

router.get('/javascript/bai2', (req, res) => {
    res.json('“Welcome bạn đến Javascript Bài 2!');
});

router.get('/html/bai1', (req, res) => {
    res.json('“Welcome bạn đến HTML Bài 1!');
});

module.exports = router;
