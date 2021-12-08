const express = require('express');
const path = require('path/posix');
const app = express();
const routUser = require(path.join(__dirname, "router", "user", "user.js"));
const routAdmin = require(path.join(__dirname, "router", "admin", "admin.js"));
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/admin', routAdmin);
app.use('/user', routUser);
app.listen(PORT, () => {
    console.log(`server is running on port:${PORT}`);
})

