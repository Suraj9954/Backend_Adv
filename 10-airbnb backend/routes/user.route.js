const path = require('path');
const rootDir = require("../utils/pathUtil");

const express = require('express');

const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

exports.userRouter = userRouter;