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

//Recursion

function testEven(num) {
    let isEven = true;
    if (num === 0) {
        isEven = true;
        console.log(isEven);
    } else if (num === 1) {
        isEven = false;
        console.log(isEven);
    } else if (num > 1){
        testEven(num - 2);
    }
}

//Bean counting


//Count Bs function
let countBs = (text) => {
    let numOfB = 0;
    for(let counter = 0; counter < text.length; counter++){
        if(text[counter] === 'B'){
            numOfB += 1;
        }
    }
    return numOfB;
};

//Count Characters function
let countChar = (text, char) => {
    let numOfChar = 0;
    for(let counter = 0; counter < text.length; counter++){
        if(text[counter] === char){
            numOfChar += 1;
        }
    }
    return numOfChar;
};

//Count Bs v.2 (based on countChar function)
function countBs(text){
    return countChar(text, 'B');
}