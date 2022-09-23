const express = require('express');
const app = express();

const products = require('./product');
const users = require('./user')
// const myLogger = (req, res, next) => {
//     console.log(" This is my server");
//     next()
// }

// app.use(myLogger);
app.use('/products', products);
app.use('/users',users);

app.listen(3000)