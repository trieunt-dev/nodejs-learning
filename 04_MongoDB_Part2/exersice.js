const mongoose = require('mongoose');

// Connect Database
mongoose.connect('mongodb://localhost:27017/MongoDB_Exersice_2', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    username: String,
    password: String,
    age: Number,
    address: String
}, {
    collection: 'Accounts'
})

const AccountModel = mongoose.model('Account', AccountSchema);

// Task 1: Tìm tất cả các bản ghi có tuổi lớn hơn 25 tuổi
/*
AccountModel.find({
    age: { $gt: 25 }
}).then(data => console.log(data))
    .catch(error => console.log(error));
*/

// Task 2: Tìm tất cả các bản ghi từ 20 đến 30
/*
AccountModel.find({
    $and: [
        { age: { $gt: 20 } },
        { age: { $lt: 30 } }
    ]
}).then(data => console.log(data))
    .catch(error => console.log(error));
*/

// Task 3: Chèn thêm 1 document mới
/*
AccountModel.create({
    username: 'Task3',
    password: '1',
    age: 28,
    address: 'HP'
}).then((data) => {
    console.log(data);
}).catch(error => console.log(error))
*/

// Task 4: Hiển thị toàn bộ document
/*
AccountModel.find({})
    .then(data => console.log(data))
    .catch(error => console.log(error));
*/

// Task 5: Tìm những người có address ở HP
/*
AccountModel.find({
    address: 'HP'
})
    .then(data => console.log(data))
    .catch(error => console.log(error));
*/

// Task 6: Tìm tất cả bản ghi có tên là ta hoặc tuổi nhỏ hơn 30
/*
AccountModel.find({
    $or: [
        { name: 'ta' },
        { age: { $lt: 30 } }
    ]
}).then(data => console.log(data))
    .catch(error => console.log(error));
*/

// Task 7: Sắp xếp các document theo tuổi và theo tứ tự tăng dần
/*
AccountModel.find({
}).sort({
    age: 1
}).then(data => console.log(data))
    .catch(error => console.log(error));
*/

// Task 8: Tìm tất cả bản ghi có tuổi lớn 20 và sắp xếp các document đó theo thứ tự giảm dần
/*
AccountModel.find({
    age: { $gt: 20 }
}).sort({
    age: -1
}).then(data => console.log(data))
    .catch(error => console.log(error));
*/

// Task 9: In ra 5 phần tử đầu của document
/*
AccountModel.find({})
    .limit(5)
    .then(data => console.log(data))
    .catch(error => console.log(error));
*/

// Task 10: In ra 3 document bắt đầu từ document thứ 5
/*
AccountModel.find({})
    .skip(4)
    .limit(3)
    .then(data => console.log(data))
    .catch(error => console.log(error));
*/

// Task 11: In ra các document có tên là thanh hoặc có tuổi nhỏ hơn 30
/*
AccountModel.find({
    $or: [
        { name: 'thanh' },
        { age: { $lt: 30 } }
    ]
}).then(data => console.log(data))
    .catch(error => console.log(error));
*/

// Task 12:  Tìm người có _id:”5e54dfe448afde5434ca75b9” và cập nhật username là “Thai Ha”
/*
AccountModel.findByIdAndUpdate(
    '5e54dfe448afde5434ca75b9',
    {
        username: 'Thai Ha'
    })
    .then(data => console.log(data))
    .catch(error => console.log(error));
*/

// Task 13: Tìm người có _id:”5e54dfd1ae8eac34d01da3bf” và cập nhật username là "Bac Ho"
/*
AccountModel.updateOne({
    _id: "5e54dfd1ae8eac34d01da3bf"
}, {
    username: 'Bac Ho'
})
    .then(data => console.log(data))
    .catch(error => console.log(error));
*/

// Task 14: Xóa người có _id:”5e54e012d276b72fd4246734”
/*
AccountModel.deleteOne({
    _id: '5e54e012d276b72fd4246734'
})
    .then(data => console.log(data))
    .catch(error => console.log(error));
*/

// Task 15: Tìm những người có cùng quê HP và cập nhật password của họ thành 1234
/*
AccountModel.updateMany({
    address: 'HP'
}, {
    $set: {
        password: '1234'
    }
})
    .then(data => console.log(data))
    .catch(error => console.log(error));
*/

// Task 16: Tìm những người có cùng quê HP và cập nhật tuổi của 1 người đầu tiên thành 1000
AccountModel.findOneAndUpdate({
    address: 'HP'
}, {
    $set: {
        age: '1000'
    }
}).then(data => console.log(data))
    .catch(error => console.log(error));

// Task 17: Tìm người đầu tiên có mật khẩu là 1234
/*
AccountModel.findOne({
    password: '1234'
}).then(data => console.log(data))
    .catch(error => console.log(error));
*/

