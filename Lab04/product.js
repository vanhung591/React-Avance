const express = require('express');
const router = express.Router();
const products = require('./data.json');
let productList = products;

router.get('/', (req, res) => {
    res.send(productList);// tra ve toan bo du lieu
});

router.get('/middleware', (req, res) => {
    res.send('Hello server');
})

router.get('/', (req,res) => {
    const result = `<h1>Chào các bạn</h1>`
    res.writeHead(200, {'content-type': 'text/json'});
    res.send(result)
})

router.get('/brands', (req, res) => {
    res.send(productList.store.brand);// tra ve brand
});

router.get('/brands/id/:id', (req, res) => {
    const Id = req.params.id;
    function brand(a) {
        const brandId = productList.store.brand
        for( let i = 0; i < brandId.length; i++){
             if( a == brandId[i].id) return brandId[i]
        }
    }

    const result = brand(Id)
    res.send(result);// tra ve Id tương ứng
});

router.get('/categories', (req, res) => {
    res.send(productList.store.categories);// tra ve brand
});

router.get('/categories/id/:id', (req, res) => {
    const Id = req.params.id;
    function categories(a) {
        const categoriesId = productList.store.categories
        for( let i = 0; i < categoriesId.length; i++){
             if( a == categoriesId[i].id) return categoriesId[i]
        }
    }

    const result = categories(Id)
    res.send(result);// tra ve Id tương ứng
});

module.exports = router