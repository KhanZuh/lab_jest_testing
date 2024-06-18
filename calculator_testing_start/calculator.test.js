const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 200
    actual = sum(100, 100);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -8
    actual = sum(-5, -3);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 5
    actual = sum(5, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {
  test("can subtract two positive numbers", () => {
    expected = 2;
    actual = subtract(5, 3);
    expect(actual).toBe(expected);

  })

  test('can subtract a larger number from a smaller number', () => { 
    expected = -3
    actual = subtract(2, 5);
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {
  test("can multiply two positive integers", () =>{
    expected = 15
    actual = multiply(5, 3);
    expect(actual).toBe(expected);
  });

   test("can multiply a positive and a negative number", () => {
    expected = -10
    actual = multiply(5, -2)
    expect(actual).toBe(expected);
   })

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
