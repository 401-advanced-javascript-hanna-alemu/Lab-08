'use strict';

//Hanna - import dotenv
require('dotenv').config();

const mongoose = require('mongoose');

// Mongoose Server URI
const MONGOOSE_URI = 'mongodb+srv://hanna9:estifaman9@cluster0-s90so.mongodb.net/test?retryWrites=true&w=majority';

// Connect
mongoose.connect(MONGOOSE_URI, {useNewUrlParser: true,});

// Disconnect
mongoose.disconnect();

require('./src/app.js').start(process.env.PORT);
