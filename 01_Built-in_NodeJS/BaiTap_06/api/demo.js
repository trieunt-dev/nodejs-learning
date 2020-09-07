let arrayNumber = require('../sum');

// Câu a
// Cách 1:
/*
let resultArray = [];

for(let i = 0; i < arrayNumber.length; i++) {
    if(arrayNumber[i] > 5) {
        resultArray.push(arrayNumber[i]);
    }
}

console.log(resultArray);
*/

// cách 2
/*
    let resultArray = arrayNumber.filter(number => number > 5);
    console.log(resultArray);
*/  

// Câu b
// arrayNumber.push(7);
// console.log(arrayNumber);

// Câu c
let numbers = arrayNumber.filter(number => number % 2 == 0);
console.log(numbers);
