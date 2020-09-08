const express = require('express');
const userModel = require('./models/User');

const router = express.Router();

// GET - Get user
router.get('/', (req, res, next) => {

    let { username, password } = req.body;

    if (username && password) {
        userModel.findOne({
            username,
            password
        }).then(data => {
            if (data) {
                res.json({
                    'message': 'Find user successfuly!',
                    'data': data
                })
            } else {
                res.json('Account does not exist');
            }
        }).catch(error => console.log(error));
    } else {
        userModel.find({}).then(data => {
            if (data.length) {
                res.json({
                    'message': 'Get user successfuly!',
                    'data': data
                })
            } else {
                res.json({
                    'message': 'List user empty!'
                })
            }
        }).catch(err => console.log(err))
    }

})

// POST - Create new user
router.post('/', (req, res, next) => {
    let { username, password, email, age, school } = req.body;

    if (username && password && email && age && school) {
        userModel.create({
            username, password, email, age, school
        }).then(() => {
            res.json({
                'message': 'Add user successfuly!',
            })
        })

    } else {
        res.json({
            'message': 'Add user failed!',
        })
    }
})

// Delete - Delete user by id
router.delete('/:id', (req, res, next) => {
    let { id } = req.params;

    userModel.deleteOne({
        _id: id
    }).then((data) => {
        if (data.deletedCount != 0) {
            res.json({
                'message': 'Delete successfuly!'
            })
        } else {
            res.json({
                'message': 'Id doesn\'t exist'
            })
        }
    })
})


module.exports = router;