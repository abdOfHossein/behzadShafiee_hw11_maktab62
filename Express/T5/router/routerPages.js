const express = require('express');
const path = require('path/posix');
const router = express.Router();

router.get('/page1', (req, res) => {
    res.sendFile(path.join(__dirname, "pages", 'index1.html'));
});

router.get('/page2', (req, res) => {
    res.sendFile(path.join(__dirname, "pages", 'index2.html'));
});

router.get('/page3', (req, res) => {
    res.sendFile(path.join(__dirname, "pages", 'index3.html'));
});


router.get('/page4', (req, res) => {
    res.sendFile(path.join(__dirname, "pages", 'index4.html'));
});


router.get('/page5', (req, res) => {
    res.sendFile(path.join(__dirname, "pages", 'index5.html'));
});




module.exports = router;