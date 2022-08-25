// make add subtract divide multiply functions
// make funtion that can take an operand w 2 numbers and call
// one of the above functions

const add = function (a, b) {
    return Number(a) + Number(b);
};
  
const subtract = function (a, b) {
    return Number(a) - Number(b);
};

const multiply = function (a, b) {
    return Number(a) * Number(b);
};

const divide = function (a, b) {
    return Number(a) / Number(b); 
}

const operate = function (operator, a, b) {
    let answer = 0;

    if (operator === 'add') {
        answer = add(a, b);
    } else if (operator === 'subtract') {
        answer = subtract(a, b);
    } else if (operator === 'multiply') {
        answer = multiply(a, b);
    } else if (operator === divide && b == 0 ) {
        answer = 'ERRO...';
    } else if (operator === 'divide') {
        answer = divide(a, b);
    }

    console.log(`ans is ${answer}`);
    return answer;
}

// write functions to populate the display when you click a button 
// add eventlistener for click, then run func 
const displayDiv = document.getElementById('displayDiv');

//numbers
    const one = document.getElementById('one');
    const two = document.getElementById('two');
    const three = document.getElementById('three');
    const four = document.getElementById('four');
    const five = document.getElementById('five');
    const six = document.getElementById('six');
    const seven = document.getElementById('seven');
    const eight = document.getElementById('eight');
    const nine = document.getElementById('nine');
    const zero = document.getElementById('zero');

//operators
    const addbtn = document.getElementById('add');
    const subbtn = document.getElementById('subtract');
    const mulbtn = document.getElementById('multiply');
    const divbtn = document.getElementById('divide');
    const equals = document.getElementById('equals');
    const clear = document.getElementById('clear');

let operator = '';
let displayText = '';
// let firstNum = '';
// let secondNum = '';

let numbersArray = [];
let operatorsArray = [];

let operatorCount = 0;



//other event listener funcs
addbtn.addEventListener('click', function (e) {
    operatorCount++;
    numbersArray.push(displayText);
    //console.log(numbersArray);
    displayText = '';
    operatorsArray.push('add');
    //console.log(operatorsArray);
    //console.log(`1st num is ${firstNum} and sign is ${operator} and 2nd num is ${secondNum}`);
})

subbtn.addEventListener('click', function (e) {
    operatorCount++;
    numbersArray.push(displayText);
    //console.log(numbersArray);
    displayText = '';
    operatorsArray.push('subtract');
    //console.log(operatorsArray);
    //console.log(`1st num is ${firstNum} and sign is ${operator} and 2nd num is ${secondNum}`);
})

mulbtn.addEventListener('click', function (e) {
    operatorCount++;
    numbersArray.push(displayText);
    //console.log(numbersArray);
    displayText = '';
    operatorsArray.push('multiply');
    //console.log(operatorsArray);
    //console.log(`1st num is ${firstNum} and sign is ${operator} and 2nd num is ${secondNum}`);
})

divbtn.addEventListener('click', function (e) {
    operatorCount++;
    numbersArray.push(displayText);
    //console.log(numbersArray);
    displayText = '';
    operatorsArray.push('divide');
    //console.log(operatorsArray);
    //console.log(`1st num is ${firstNum} and sign is ${operator} and 2nd num is ${secondNum}`);
})

equals.addEventListener('click', function (e) {
    let ans = 0;
    numbersArray.push(displayText);
    //console.log(numbersArray);
    //console.log(operatorsArray);
    //console.log(`1st num is ${firstNum} and sign is ${operator} and 2nd num is ${secondNum}`);
    for (let i = 0; i < operatorCount; i++) {
        ans = operate(operatorsArray[0], numbersArray[0], numbersArray[1]);
        numbersArray.shift();
        numbersArray[0] = ans;
        operatorsArray.shift();
        console.log(`shifted num ${numbersArray} and shifter op ${operatorsArray} and ans is ${ans}`);
    }
    displayDiv.innerText = ans;
    //console.log(ans);
    //console.log(operatorCount);
    wipe();
})

clear.addEventListener('click', function (e) {
    wipe();
    displayDiv.innerText = 0;
});


function wipe () {
    displayText = '';
    firstNum = '';
    secondNum = '';
    operator = '';
    numbersArray = [];
    operatorsArray = [];
    operatorCount = 0;
}

//number eventlistener funcs
one.addEventListener('click', function (e) {
    displayText += '1';
    //console.log(displayText);
    displayDiv.innerText = displayText;
})

two.addEventListener('click', function (e) {
    displayText += '2';
    //console.log(displayText);
    displayDiv.innerText = displayText;
})

three.addEventListener('click', function (e) {
    displayText += '3';
    //console.log(displayText);
    displayDiv.innerText = displayText;
})

four.addEventListener('click', function (e) {
    displayText += '4';
    //console.log(displayText);
    displayDiv.innerText = displayText;
})

five.addEventListener('click', function (e) {
    displayText += '5';
    //console.log(displayText);
    displayDiv.innerText = displayText;
})

six.addEventListener('click', function (e) {
    displayText += '6';
    //console.log(displayText);
    displayDiv.innerText = displayText;
})

seven.addEventListener('click', function (e) {
    displayText += '7';
    //console.log(displayText);
    displayDiv.innerText = displayText;
})

eight.addEventListener('click', function (e) {
    displayText += '8';
    //console.log(displayText);
    displayDiv.innerText = displayText;
})

nine.addEventListener('click', function (e) {
    displayText += '9';
    //console.log(displayText);
    displayDiv.innerText = displayText;
})

zero.addEventListener('click', function (e) {
    displayText += '0';
    //console.log(displayText);
    displayDiv.innerText = displayText;
})
