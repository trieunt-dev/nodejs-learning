let person = require('./api/demo');

let person2 = {
    name: 'Thái',
    age: 12,
    car: {
        nameCar: 'BMW',
        price: 30000
    }
}

if(person === person2) {
    console.log('Hai object bằng nhau')
} else {
    console.log('Hai object không bằng')
}