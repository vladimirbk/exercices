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
    console.log(range)
    return range;
}