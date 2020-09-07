const express = require('express');
const bodyParser = require('body-parser');

const router = require('./routers/router');

const app = express();
const port = 3000;

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Router
app.use('/api/', router);

app.listen(port, () => {
    console.log('Server is running on port ' + port);
})

