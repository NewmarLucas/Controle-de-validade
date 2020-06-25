const express = require('express');

const userController = require('./controllers/userController');
const productsController = require('./controllers/productsController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

const { response } = require('express');

const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.get('/user', userController.index);
routes.post('/user', userController.create);

routes.get('/profile', profileController.index);

routes.get('/products', productsController.index);
routes.post('/products', productsController.create);
routes.delete('/products/:id', productsController.delete);

module.exports = routes;