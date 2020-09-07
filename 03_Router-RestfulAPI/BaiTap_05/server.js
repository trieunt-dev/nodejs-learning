const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/', router);

app.listen(3000)
