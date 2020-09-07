let value = require('./api/demo');

let lenghtValue = value.length;

let newArray = value.map(number => number * number);

console.log('Độ dài của giá trị: ', lenghtValue);

console.log('Mảng mới có giá trị: ', newArray);