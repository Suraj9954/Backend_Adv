// Core Module
const path = require('path');
// External Module
const express = require('express');
// Local modules
const { userRouter } = require('./routes/user.route');
const {hostRouter} = require('./routes/host.route');
const rootDir = require("./utils/pathUtil");

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded());
app.use(express.static(path.join(rootDir, 'public')));

app.use(userRouter);
app.use("/host",hostRouter);

app.use((req, res, next) => {
    res.render('404', { pageTitle: 'Page Not Found' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});