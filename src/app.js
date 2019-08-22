'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');


// Prepare the express app
const app = express();

//Hanna - import the routes

const categoriesRoute = require('../routes/category-routes');
const productsRoute = require('../routes/product-routes');


// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/docs', express.static('./docs'));

//Hanna - Tell app to use the imported routes
app.use(categoriesRoute);
app.use(productsRoute);

// Esoteric Resources
const errorHandler = require( './middleware/error.js');
const notFound = require( './middleware/404.js' );

// Catchalls
app.use('*', notFound);
app.use(errorHandler);

//Hanna - now we export the server as an object by attaching stuff to it

module.exports = {};
module.exports.server = app;
module.exports.start = port => {
  const PORT = port || process.env.PORT || 3000;

  //Hanna - this line tells the app to lisen for requests from the port
  app.listen(PORT, () => console.log(`Hey Hanna, Server is app at port ${PORT}`));

};
