const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const pathFileData = path.join(__dirname, '../mocks/data.json');

let fileContent = fs.readFileSync(pathFileData);
let datas = JSON.parse(fileContent);

// GET - All Data
router.get('/', (req, res, next) => {
    let page = req.query.page;
    console.log("Page: ", page);

    let limitItem = 5;

    if (datas.length == 0) {
        res.status(500);
        res.json('List data is empty!')
    }

    if (page) {
        let totalPage = datas.length / 5;

        if (page <= 0) page = 1;

        if (page > Math.ceil(totalPage)) {
            res.json('Invalid page number!')
        }

        let start = (page - 1) * limitItem;
        let end = start + limitItem;

        let getData = datas.slice(start, end);

        res.json(getData);
    } else {
        res.json(datas);
    }


})

// GET - Find by ID
router.get('/:id', (req, res, next) => {
    let id = parseInt(req.params.id);

    let user = datas.find((item) => {
        return item.id == id;
    });

    if (!user) {
        res.status(500);
        res.json('User doesn\'t exist!');
    }
    res.json(user);
})


// POST - API Login
router.post('/login', (req, res, next) => {
    let { username, password } = req.body;

    let user = datas.find((item) => {
        return item.username == username;
    });

    if (!user) {
        res.status(500);
        res.json('User doesn\'t exist!');
    } else if (user.password !== password) {
        res.status(500);
        res.json('Your password is incorrect')
    } else {
        res.json('Login successfuly!')
    }
})

// POST - Create user
router.post('/', (req, res, next) => {
    let user = req.body;

    let element = datas.find(element => user.id == element.id);

    if (element) {
        res.status(500);
        res.json('Id already exists. Please enter another id')
    } else {
        datas.push(user);
        fs.writeFileSync(pathFileData, JSON.stringify(datas));
        res.json('Add user successfuly!');
    }
})

// PUT - Edit user by id
router.put('/:id', (req, res, next) => {
    let id = parseInt(req.params.id);
    let { username, password, address } = req.body;

    let user = datas.find((item) => {
        return item.id == id;
    });

    if (!user) {
        res.status(500);
        res.json('User doesn\'t exist!');
    } else {
        user.username = username;
        user.password = password;
        user.address = address;

        fs.writeFileSync(pathFileData, JSON.stringify(datas));
        res.json('Edit user successfuly!');
    }
})

// DELETE - Delete user by id
router.delete('/:id', (req, res, next) => {
    let id = parseInt(req.params.id);
    let userIndex = datas.findIndex((item) => {
        return item.id == id;
    });

    if (userIndex === -1) {
        res.status(500);
        res.json('User doesn\'t exist!');
    } else {
        datas.splice(userIndex, 1);

        fs.writeFileSync(pathFileData, JSON.stringify(datas));
        res.json('Delete user successfuly!');
    }
})


module.exports = router;