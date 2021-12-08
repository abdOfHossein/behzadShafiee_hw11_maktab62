const express = require('express');
const path = require('path/posix');
const app = express();
const PORT = process.env.PORT || 3000;
const routePage = require(path.join(__dirname, "router", "routerPages.js"));


app.use(express.static(path.join(__dirname, "router")));

app.use('/', routePage);
app.listen(PORT, () => {
    console.log(`server is running on port:${PORT}`);
});

