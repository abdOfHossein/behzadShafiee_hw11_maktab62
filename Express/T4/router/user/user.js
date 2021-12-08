const fs = require('fs');
const express = require('express');
const path = require('path/posix');;
const router = express.Router();
const userNAmeData = require('../../userInfo/userName.json');

router.post('/getUsers', (req, res) => {

    fs.readFile('./././userInfo/userName.json', (err, data) => {
        if (err) {
            res.send(`err is ===>${err}`);
        }
        else {
            let dataStr = JSON.parse(data)
            for (key of dataStr) {
                if (dataStr[key].userName === req.body.userName) {
                    res.json(dataStr[key])
                }
            }
        }
    })

});


fs.readFile('./././userInfo/userName.json', (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(JSON.parse(data));
    }
})

module.exports = router;