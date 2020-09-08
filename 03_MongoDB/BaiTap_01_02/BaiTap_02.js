const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/MongoDB_Exersice', { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    username: String,
    password: String,
    email: String,
    age: Number,
    school: String
}, {
    collection: 'Users'
})

const UsersModel = mongoose.model('UsersModel', UsersSchema);

// Task 01 - Tạo 5 bản ghi với nội dung bất kì

UsersModel.create(
    {
        username: 'trieunt',
        password: '123456',
        email: 'trieunt.nodemy@gmail.com',
        age: 25,
        school: 'Nodemy'
    },
    {
        username: 'phuongdn',
        password: '12345678',
        email: 'phuongdn.nodemy@gmail.com',
        age: 20,
        school: 'Nodemy'
    },
    {
        username: 'trunghv',
        password: '123456',
        email: 'trunghv.nodemy@gmail.com',
        age: 22,
        school: 'Nodemy'
    },
    {
        username: 'huongdt',
        password: '123456',
        email: 'huongdt.nodemy@gmail.com',
        age: 23,
        school: 'Nodemy'
    },
    {
        username: 'vytran',
        password: '123456',
        email: 'vytran.nodemy@gmail.com',
        age: 20,
        school: 'Nodemy'
    }
)
    .then(() => console.log('Add data successfuly!'))
    .catch(err => console.log(err))




// Task 02 - Tìm ra 1 bản ghi theo username, password
/*
UsersModel.findOne({
    username: 'trieunt',
    password: '123456'
}).then(data => {
    if (data) {
        console.log(data)
    } else {
        console.log('Account does not exist');
    }
}).catch(error => console.log(error));
*/

// Task 03 - Xóa 1 bản ghi theo id
/*
UsersModel.findByIdAndDelete({
    _id: '5f57b712b5799c55e905c1d2'
});
*/

// Task 04 - Thực hiện tìm và in ra giới hạn chỉ in ra 3 bản ghi 
/*
UsersModel.find({})
    .limit(3)
    .then(data => console.log(data))
    .catch(error => console.log(error))
*/