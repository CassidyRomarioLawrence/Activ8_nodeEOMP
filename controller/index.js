const express = require('express');
const path = require('path');
const parser = require('body-parser');
const route = express.Router();

const { User, Product } = require('../model/index');

const user = new User();
const prod = new Product();

route.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'));
})

//============== ROUTES FOR USERS ===============
// Register User
route.post('/register', parser.json(), (req, res) => {
    user.createUser(req, res);
})
// Fetch single user
route.get('/user/:id', (req, res) => {
    user.fetchUser(req, res);
})
// Fetch all users
route.get('/users', (req, res) => {
    user.fetchUsers(req, res);
})
// Update User
route.put('/user/:id', parser.json(), (req, res) => {
    user.updateUser(req, res);
})
// Delete User
route.delete('/user/:id', (req, res) => {
    user.deleteUser(req,res);
})
// Login User
route.post('/login', parser.json(), (req, res) => {
    user.login(req, res);
})

//============ ROUTES FOR PRODUCTS =============
// Add products
route.post('/product', parser.json(), (req, res) => {
    prod.addProduct(req, res);
})
// View products
route.get('/products', (req, res) => {
    prod.fetchProducts(req, res);
})
// View a single product
route.get('/product/:id', (req, res) => {
    prod.fetchProduct(req, res);
})
// Update a product
route.put('/product/:id', parser, (req, res) => {
    prod.updateProduct(req, res);
})
// Delete a product
route.delete('/product/:id', (req, res) => {
    prod.deleteProduct(req, res);
})

module.exports = route;