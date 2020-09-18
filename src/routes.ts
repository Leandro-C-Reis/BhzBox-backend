import express from 'express';

import ProductController from './controller/product';
import UserController from './controller/user';
import SalesmanController from './controller/salesman';

const routes = express();

const productController = new ProductController;
const userController = new UserController;
const salesmanController = new SalesmanController;

// product routes
routes.get('/product/list', productController.index);
routes.get('/product/salesman/:id', productController.show_of_salesman);
routes.get('/product/list/:id', productController.show);
routes.get('/product/list/highlighted', productController.show_highlighted);
routes.post('/product/register', productController.create);
routes.put('/product/update/:id', productController.update);
routes.delete('/product/delete/:id', productController.destroy);

// user routes
routes.get('/user/list', userController.index);
routes.get('/user/list/:id', userController.show);
routes.post('/user/register', userController.create);
routes.put('/user/update/:id', userController.update);
routes.delete('/user/delete/:id', userController.destroy);

// salesman routes
routes.get('/salesman/list', salesmanController.index);
routes.get('/salesman/list/:id', salesmanController.show);
routes.post('/salesman/register', salesmanController.create);
routes.put('/salesman/update/:id', salesmanController.update);
routes.delete('/salesman/delete/:id', salesmanController.destroy);

export default routes;