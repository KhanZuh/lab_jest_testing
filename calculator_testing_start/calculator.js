const sum = function(a, b){
    return a + b;
};

const subtract = (a, b) => {
    return a-b;
}


const multiply = (a, b) => {
    return a*b;
}

const divide = (a, b) => {
    return a/b;
}

const modulus = (a, b) => {
    return a%b
}

const even = (number) => {
    return number%2 === 0
}

//const even = num => num % 2 === 0;

const odd = (number) => {
    return !even(number);
}



module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
