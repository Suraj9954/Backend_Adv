
const express = require('express');
const { registeredHomes } = require('./host.route');

const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
    console.log(registeredHomes)
    res.render('home', { registeredHomes: registeredHomes, pageTitle: 'Home', currentPage : 'home'});
});

exports.userRouter = userRouter;