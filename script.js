// make add subtract divide multiply functions
// make funtion that can take an operand w 2 numbers and call
// one of the above functions

const add = function (a, b) {
    return a + b;
};
  
const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
    // const array = arguments[0];
    // let product = 1;
    // for (let i = 0; i < array.length; i++) {
    //   product *= array[i];
    // }
    // return product;
};

const divide = function (a, b) {
    return a / b; 
}

const operate = function (operator, a, b) {
    let answer = 0;

    if (operator === add) {
        answer = add(a, b);
    } else if (operator === subtract) {
        answer = subtract(a, b);
    } else if (operator === multiply) {
        answer = multiply(a, b);
    } else if (operator === divide) {
        answer = divide(a, b);
    }

    return answer;
}