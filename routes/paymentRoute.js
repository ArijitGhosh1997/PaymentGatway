const express = require ('express');
const route = express.Router();


//import controller for connection
const paymentController = require('../controllers/paymentController');

//render Home page
route.get('/', paymentController.renderProductPage);
//Create order using post
route.post('/createOrder', paymentController.createOrder);

module.exports = route;