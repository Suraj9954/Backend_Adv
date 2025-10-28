const express = require('express');

const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
    res.send(`<h1>Add your Home details here:</h1>
        <form action="/host/add-home" method="POST" >
            <input type="text" name="homeName" placeholder="Enter Home Name" />
            <button type="submit">Add Home</button>
        </form>`);
});

hostRouter.post("/add-home", (req, res, next) => {
    console.log("Home details submitted:", req.body);
    res.send(
        `<h1>Thanks for adding your home: ${req.body.homeName}</h1>
        <a href="/">Go to Home Page</a>
        `);
});

module.exports = hostRouter;