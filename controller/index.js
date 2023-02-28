const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const router = express.Router();

const {User, Product} = require('../model');

const user = new User();

const product = new Product();

router.get('/', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'));
})
// =========USER's Router========
// Login
router.post('/login', bodyParser.json(), (req, res)=>{
    user.login(req, res);
})
// View all users
router.get('/users', (req, res)=>{
    user.fetchUsers(req, res);
})
// View single user
router.get('/user/:id', 
(req, res)=> {
    user.fetchUser(req, res);
})
// Update users
router.put('/user/:id',bodyParser.json(), (req, res)=>{
    user.updateUser(req, res);
})
// Register user
router.post('/register', bodyParser.json(), (req, res)=> {
    user.createUser(req, res);
})
// Delete user
router.delete('/user/:id', (req, res)=>{
    user.deleteUser(req, res);
});
// =====Products======
// View all products
router.get('/products', (req, res)=> {
    product.fetchProducts(req, res);
})
// View a single product
router.get('/product/:id', 
(req, res)=> {
    product.fetchProduct(req, res);
})
// Create a new product
router.post('/product', 
bodyParser.json(), 
(req, res)=> {
    product.addProduct(req, res);
})
// Update a product
router.put('/product/:id', 
bodyParser.json(),
(req, res)=> {
    product.updateProduct(req, res);
})
// Delete a product
router.delete('/product/:id', 
(req, res)=> {
    product.deleteProduct(req, res);
})

module.exports = router;