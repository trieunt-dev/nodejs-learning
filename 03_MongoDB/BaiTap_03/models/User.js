const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    password: String,
    email: String,
    age: Number,
    school: String
}, {
    collection: 'Users'
})

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;