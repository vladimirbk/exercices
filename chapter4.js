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

//A List
function arrayToList(array) {
    let list = null;
    for(let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list }
    }
    return list;
}

function listToArray(list) {
    let array = [];
    for(let node = list; node;  node = node.rest){
        array.push(node.value);
    }
    return array;
}

function prepend(value, list) {
    return { value, rest: list };
}

function nth(list, num) {
    if (!list) {
        return undefined;
    } else if (num == 0) {
        return list.value
    } else {
        return nth (list.rest, num - 1)
    }
}

//Deep comparison
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (a == null || typeof a != "object" || b == null || typeof b != "object") { 
        return false;
    } 
  
    let keysA = Object.keys(a), keysB = Object.keys(b);
    if (keysA.length != keysB.length) { 
        return false; 
    }
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
          return false;
      }
    }
    return true;
  }