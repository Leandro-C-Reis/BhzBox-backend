import express from 'express';

import ProductController from './controller/product';
import UserController from './controller/user';
import SalesmanController from './controller/salesman';
import PurchaseController from './controller/purchase';
import AddressController from './controller/address';

const routes = express();

const productController = new ProductController;
const userController = new UserController;
const salesmanController = new SalesmanController;
const purchaseController = new PurchaseController;
const addressController = new AddressController;

// product routes
routes.get('/product/list', productController.index);
routes.get('/product/salesman/:id', productController.show_of_salesman);
routes.get('/product/list/:id', productController.show);
routes.get('/product/featured', productController.show_featured);
routes.post('/product/featured', productController.crete_featured_products);
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

// purchase routes
routes.get('/purchase/list', purchaseController.index);
routes.get('/purchase/inprocess', purchaseController.show_inprocess);
routes.get('/purchase/completed', purchaseController.show_completed);
routes.get('/purchase/user/:id', purchaseController.show_of_user);
routes.get('/purchase/list/:id', purchaseController.show);
routes.post('/purchase/create', purchaseController.create);
routes.put('/purchase/update/:id', purchaseController.update);

// address routes
routes.get('/address/list', addressController.index);
routes.get('/address/salesman/:id', addressController.show_of_salesman);
routes.get('/address/user/:id', addressController.show_of_user);
routes.get('/address/list/:id', addressController.show);
routes.post('/address/create', addressController.create);
routes.put('/address/update/:id', addressController.update);
routes.delete('/address/delete/:id', addressController.destroy);

export default routes;