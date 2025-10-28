const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("First middleware", req.url, req.method);
    next();
});

app.use((req, res, next) => {
    console.log("Second middleware", req.url, req.method);
    next();
});

/* app.use((req, res, next) => {
    console.log("Third middleware", req.url, req.method);
    res.send("<h1>Hello from Express server</h1>");
}); */

app.get("/", (req, res, next) => {
    console.log("Handling / for GET request", req.url, req.method);
    res.send(`<h1>Hello from Express server</h1>`);
});

app.get("/contact-us", (req, res, next) => {
    console.log("Handling /contact-us for GET request", req.url, req.method);
    res.send(`<h1>Please give your details here</h1>
        <form action="/contact-us" method="POST">
            <input type="text" name="name" placeholder="Enter your name" />
            <input type="email" name="email" placeholder="Enter your email" />
            <button type="submit">Submit</button>
        </form>
        `);
})

app.post("/contact-us", (req, res, next) => {
    console.log("Handling /contact-us for POST request", req.url, req.method);
    res.send("<h1>Thanks for submitting your details. We will get back to you soon!</h1>");
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
})