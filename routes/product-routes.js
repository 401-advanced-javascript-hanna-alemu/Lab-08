'use strict';

//Hanna - import express framework
const express = require('express');

//Hanna - define a route for products and export
const productsRouter = express.Router();


const Products = require('../models/products/products');
const products = new Products();

//Hanna - define all routes and callbacks 
productsRouter.get('/api/v1/products', getProducts);
productsRouter.post('/api/v1/products', postProducts);
productsRouter.get('/api/v1/products/:id', getProduct);
productsRouter.put('/api/v1/products/:id', putProducts);
productsRouter.delete('/api/v1/products/:id', deleteProducts);

//Hanna - products routes handlers


function getProducts(request,response,next) {
  // expects an array of objects back
  products.get()
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      response.status(200).json(output);
    })
    .catch( next );
}

function getProduct(request,response,next) {
  // expects an array with one object in it
  products.get(request.params.id)
    .then( result => response.status(200).json(result[0]) )
    .catch( next );
}

function postProducts(request,response,next) {
  // expects the record that was just added to the database
  products.post(request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}


function putProducts(request,response,next) {
  // expects the record that was just updated in the database
  products.put(request.params.id, request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

function deleteProducts(request,response,next) {
  // Expects no return value (the resource should be gone)
  products.delete(request.params.id)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

module.exports = productsRouter;

