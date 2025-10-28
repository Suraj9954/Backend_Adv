// External Module
const express = require('express');
// Local modules
const { userRouter } = require('./routes/user.route');
const hostRouter = require('./routes/host.route');

const app = express();

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host",hostRouter);

app.use((req, res, next) => {
    res.status(404).send("<h1>404 Page Not Found</h1>");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});