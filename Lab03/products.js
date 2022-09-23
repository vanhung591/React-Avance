const express = require('express');
const router = express.Router();
const products = require('./product.json')
const fs = require('fs');
let productList = products;

router.get('/', (req, res) => {
    fs.readFile("./products.json","utf-8",)
})

module.exports = router