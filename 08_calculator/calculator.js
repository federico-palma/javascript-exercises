const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let totalSum = 0
  for (let i = 0; i < array.length; i++) {
    totalSum += array[i];
  }
  return totalSum
};

const multiply = function(num) {
  let product = 1
  for (let i = 0; i < num.length; i++) {
    product *= num[i];
  }
  return product
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(num) {
  let product = 1;
  for (let i = num; i > 0; i--) {
    product *= i
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
