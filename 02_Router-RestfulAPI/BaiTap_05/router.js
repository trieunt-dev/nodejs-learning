const express = require('express');
const router = express.Router();
const obj = require('./data');

router.get('/', (req, res) => {
    for (let key in obj) {
        res.json(key)
    }
})

router.get('/value', (req, res) => {
    for (let key in obj) {
        res.json(obj[key])
    }
})

router.post('/', (req, res, next) => {
    let { key, value } = req.body;

    for (let keyObj in obj) {
        if (keyObj === key) {
            res.status(500);
            res.json('Key already exists!')
        }
    }

    obj[key] = value;

    res.json(obj)
})

router.put('/:key', (req, res, next) => {
    let key = req.params.key;
    let value = req.body.value;

    for (let keyObj in obj) {
        if (keyObj === key) {
            obj[key] = value;
            res.json(obj)
        }
    }

    res.status(500);
    res.json('Key doesn\'t exist!');
})

router.delete('/:key', (req, res, next) => {
    let key = req.params.key;

    for (let keyObj in obj) {
        if (keyObj === key) {
            delete obj[key];
            res.json(obj)
        } else {
            res.status(500);
            res.json('Key doesn\'t exist!');
        }
    }
})

module.exports = router;
