'use strict';

//Hanna - import dotenv
require('dotenv').config();

const mongoose = require('mongoose');

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
};

// Mongoose Server URI
const MONGOOSE_URI = 'mongodb+srv://hanna9:estifaman9@cluster0-s90so.mongodb.net/test?retryWrites=true&w=majority';

// Connect
mongoose.connect(MONGOOSE_URI, mongooseOptions);


require('./src/app.js').start(3000);
