const express = require('express');
const app = express();
const port = 3000;

const students = require('./students')
const products = require('./products')
app.use("/students", students);
app.use("/products", products);


app.listen(port)