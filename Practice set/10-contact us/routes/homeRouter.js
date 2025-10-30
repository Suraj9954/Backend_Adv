// Core Module
const path = require('path');
// External Module
const express = require('express');
//Local Module
const rootDir = require('../utils/pathUtil');

const homeRoute = express.Router();

homeRoute.get("/", (req, res, next) => {
    console.log("Handling / for GET request", req.url, req.method);
    res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

exports.homeRoute = homeRoute;