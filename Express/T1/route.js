// const express = require('express');
// const path = require('path/posix');
// const router=express.Router();
// const app = express();

// app.get('/fileHtml', function (req, res) {
//     res.sendFile(path.join(__dirname,'/index.html'))
// })


// module.exports=router;


//========================================================

const express = require('express');
const router = express.Router();

router.get('/Hello', function (req, res) {
      res.send('Hello World');
});

module.exports = router;
