const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./router');

const app = express();

mongoose.connect('mongodb://localhost:27017/MongoDB_Exersice', { useNewUrlParser: true, useUnifiedTopology: true });

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use('/api', router)



app.listen(3000);