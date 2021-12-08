const express = require('express');
const path = require('path/posix');
const app = express();
const PORT = process.env.PORT || 4000;
const routeHomePage = require(path.join(__dirname, 'router', 'routerDisplayHtml.js'));



app.use(express.static(path.join(__dirname, '/router')));
app.use('/', routeHomePage);

app.listen(PORT, () => {
    console.log(`server is running on port:${PORT}`);
});

