const express = require('express');
const router = require('./routers/router');

const app = express();
const port = 3000;

app.use('/nodemy', router);


app.listen(port, () => console.log(`Server is running with port ${port}`));