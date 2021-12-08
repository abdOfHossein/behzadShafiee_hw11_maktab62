const express = require('express');
const path = require('path/posix');
const router = express.Router();
const userNAmeData = require('../../userInfo/userName.json');
const arrUserNAmeData = [];
arrUserNAmeData.push(userNAmeData);
router.get('/getAllUsers', (req, res) => {
    res.json(userNAmeData);

});

module.exports = router;