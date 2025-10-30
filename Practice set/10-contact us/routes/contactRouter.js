// Core Module
const path = require('path');
// External Module
const express = require('express');
//Local Module
const rootDir = require('../utils/pathUtil');

const contactRoute = express.Router();

contactRoute.get("/contact-us", (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
});


contactRoute.post("/contact-us", (req, res, next) => {
    console.log("Received contact details:", req.body);
    res.sendFile(path.join(rootDir, 'views', 'contact-success.html'));
});

exports.contactRoute = contactRoute;