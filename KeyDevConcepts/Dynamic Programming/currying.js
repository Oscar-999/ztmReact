// currying

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;

const curriedMultiplyBy5 = curriedMultiply(5);
