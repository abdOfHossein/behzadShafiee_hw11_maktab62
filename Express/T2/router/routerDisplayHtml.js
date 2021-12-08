const express = require('express');
const path = require('path/posix');
const router = express.Router();


router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, "Html", "index.html"), (err) => {
        if (err) {
            res.send(`err is=>${err}`);
        }
    });
})

module.exports = router;