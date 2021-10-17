// Challenge(Desafio) #01

const sum = (value1, value2) => value1 + value2;
const sub = (value1, value2) => value1 - value2;
const mult = (value1, value2) => value1 * value2;
const div = (value1, value2) => value1 / value2;
const pow = (value1, value2) => Math.pow(value1, value2);

const sum2 = (value1) => (value2) => (value3) =>
  sum(sum(value1, value2), value3);

const calculate = (value1) => (value2) => (fn) => fn(value1, value2);

console.log("sum2: ", sum2(10)(5)(2));
console.log("calculat sum: ", calculate(2)(3)(sum));
console.log("calculat sub: ", calculate(2)(3)(sub));
console.log("calculat mult: ", calculate(2)(3)(mult));
console.log("calculat div: ", calculate(2)(3)(div));
console.log("calculat pow: ", calculate(2)(3)(pow));
