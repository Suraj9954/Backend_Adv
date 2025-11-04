const path = require('path');
const rootDir = require("../utils/pathUtil");

const express = require('express');

const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
    res.render('addHome', { pageTitle: 'Add Home' });
});

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
    console.log("Home details submitted:", req.body);
    registeredHomes.push({houseName: req.body.houseName});
    res.render('homeAdded', { pageTitle: 'Home Added Successfully' });
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;