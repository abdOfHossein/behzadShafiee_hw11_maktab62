const express = require('express');
const path = require('path/posix');
const router = express.Router();


router.get('/:page', (req, res) => {

    res.sendFile(path.join(__dirname, "pages", `${req.params["page"]}.html`))

});




module.exports = router;