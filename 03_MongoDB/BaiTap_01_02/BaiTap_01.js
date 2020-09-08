const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/MongoDB_Exersice', { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;

const PostsSchema = new Schema({
    title: String,
    content: String,
    comment: []
}, {
    collection: 'Posts'
})

const PostsModel = mongoose.model('Posts', PostsSchema);

// Create 2 record
/*
PostsModel.create(
    {
        title: 'Chiếc điện thoại Android chống nước đầu tiên là của Motorola',
        content: 'Nếu đã từng vô tình bị rớt điện thoại xuống hồ bơi hoặc một cốc cà phê đang uống dở, chúng ta ắt hẳn sẽ cảm thấy tính năng chống nước trên điện thoại thực sự là một thứ rất cần thiết. Có một số thứ không được thiết kế để bị ướt và hầu hết các smartphone từng là một trong số đó.',
        comment: [
            'Nếu không tính smartphone thì mấy con điện thoại nội địa nhật đã có chống nước từ rất lâu rồi thì phải',
            'ôi con smartphone đầu tiên của mình là Atrix 4G đấy'
        ]
    },
    {
        title: 'Dịch vụ giúp bạn có thể biến mất, trốn khỏi cuộc sống bộn bề',
        content: 'Đôi khi trong cuộc sống, nhiều người lại mong ước được “bốc hơi” biến mất khỏi những guồng quay thường ngày mà không để lại một dấu vết gì. Nghe có vẻ khó tin thế nhưng ở Nhật Bản, các công ty có hẳn một dịch vụ chuyên giúp khách hàng biến mất khỏi cuộc sống, bỏ lại tất cả sau lưng và có cơ hội bắt đầu cuộc đời mới.',
        comment: [
            'Có khi nào bác Steve Jobs dùng dịch vụ này không?',
            'Nợ tiền nhiều quá dùng dịch vụ này được ko'
        ]
    },
)
*/

// Find All Post
/*
PostsModel.find({})
    .then(data => console.log(data))
    .catch(error => console.log(error));
*/

// Find by id

// Cach 1
/*
PostsModel.find({
    _id: '5f57783840993d50cdcbd758'
}).then(data => console.log(data))
    .catch(error => console.log(error))
*/

// Cach 2
/*
PostsModel.findById('5f57783840993d50cdcbd758').then(data => console.log(data))
    .catch(error => console.log(error))
*/

// Cach 3
/*
PostsModel.findOne({
    _id: '5f57783840993d50cdcbd758'
}).then(data => console.log(data))
    .catch(error => console.log(error))
*/

// Update by Id
PostsModel.updateOne({
    _id: '5f57783840993d50cdcbd758'
}, {
    title: 'Dịch vụ giúp bạn có thể biến mất...'
}).then(data => console.log(data))
    .catch(error => console.log(error))