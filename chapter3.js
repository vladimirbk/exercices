//Minimum function
const min = function(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return console.log('Enter numbers');
    } else if (num1 === num2) {
        return console.log('Numbers are equal');
    } else if (num1 > num2) {
        return console.log(num2);
    } else {
        return console.log(num1);
    }
};