
// const express = require('express');
// const path = require('path/posix');
// const port=5000;
// const app = express();
// const thingRouter=require('./thing');

// app.use('/thing',thingRouter)

// app.listen(port)

//=========================================
console.log(22);
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


const routDisplayHello = require('./route.js');
app.use('/', routDisplayHello);
app.listen(port);

