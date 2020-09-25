// Triangle
// for (let index = '*'; index.length <= 7; index+='*') {
//     console.log(index)
// }

// FizzBuzz
// for (let num = 1; num <= 100; num++) {
//     if(num % 3 === 0 && num % 5 === 0){
//         console.log('FizzBuzz');
//     }else if(num % 5 === 0){
//         console.log('Buzz');
//     }else if(num % 3 === 0){
//         console.log('Fizz');
//     }else{
//         console.log(num);
//     }
// }

//Chessboard
let size = 8;
let j = '#';

while (j.length <= Math.pow(size,2)) {
    if(j.length % 8 === 0){
        j += '\n';
    } else if(j.length % 2 === 0) {
        j += '#'
    } else {
        j += ' ';
    }
}

console.log(j);