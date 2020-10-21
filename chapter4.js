//The Sum of Range

function range(num1, num2){
    let range = [];
    for(let x = num1; x <= num2; x++){
        range.push(x)
    }
    return range;
}

function sum(numbers){
    let sum = 0;
    for(let num of numbers){
        sum += num;
    }
    // numbers.forEach(element => {
    //     sum += element;
    // });
    return sum;
}

function rangeModified(num1, num2, incrementNum = num1 > num2 ? -1 : 1){
    let range = [];
    if (incrementNum > 0) {
        for(let x = num1; x <= num2; x += incrementNum){
            range.push(x)
        }
    } else {
        for (let x = num1; x >= num2; x += incrementNum){
            range.push(x)
        }
    }
    return range;
}

//Reversing an array

function reverseArray(array) {
    let reversedArray = [];
    for (let lengthOfArray = array.length - 1; lengthOfArray >= 0; lengthOfArray -= 1){
        reversedArray.push(array[lengthOfArray]);
    }

    return reversedArray;
}

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let oldElement = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = oldElement;
    }
    return array;
  }