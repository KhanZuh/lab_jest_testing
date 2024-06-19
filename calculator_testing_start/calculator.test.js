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
  test("can divide two small positive integers", () => {
    expected = 2
    actual = divide (10,5);
    expect(actual).toBe(expected);
  })

  test("returns inifinity when dividing by 0", () => {
    expected = Infinity
    actual = divide (5, 0);
    expect(actual).toBe(expected);
  })

  // Extension
  test('returns a number greater than zero when dividing a positive number by a smaller positive number', () => {
    actual = divide(10, 5);
    expect(actual).toBeGreaterThan(0);
  });

  

});

describe('modulus', () => {
  test("can return a remainder when dividing two integers", () => {
    expected = 1
    actual = modulus (5,2);
    expect(actual).toBe(expected);
    })

  test("can return a NaN when finding the remainder when dividing by zero", () => {
    expected = NaN
    actual = modulus (5,0);
    expect(actual).toBe(expected);
      })

  test("can return zero", () => {
    expected = 0
    actual = modulus (10,2);
    expect(actual).toBe(expected);
      })


});

describe('even', () => {
  test("if returns true", () => {
    expected= true;
    actual = even (2);
    expect(actual).toBe(expected);
  })

});

describe('odd', () => {
  test("if returns false", () => {
    expected = false;
    actual = even (1);
    expect(actual).toBe(expected);
  })

});
