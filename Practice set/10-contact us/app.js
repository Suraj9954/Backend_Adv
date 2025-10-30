const express = require('express');
const {homeRoute} = require('./routes/homeRouter');
const {contactRoute} = require('./routes/contactRouter');
const app = express();

app.use(express.urlencoded());
app.use(homeRoute);
app.use(contactRoute);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
})