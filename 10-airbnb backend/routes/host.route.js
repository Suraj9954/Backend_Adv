const path = require('path');
const rootDir = require("../utils/pathUtil");

const express = require('express');

const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'addHome.html'));
});

hostRouter.post("/add-home", (req, res, next) => {
    console.log("Home details submitted:", req.body);
    res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
});

module.exports = hostRouter;