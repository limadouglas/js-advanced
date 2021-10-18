const sum = (value1, value2) => value1 + value2;
const sub = (value1, value2) => value1 - value2;
const sumInTerminal = (value1, value2) => console.log(sum(value1, value2));
const subInTerminal = (value1, value2) => console.log(sub(value1, value2));

const exec = (fn, value1, value2) => fn(value1, value2);

exec(sumInTerminal, 56, 38);
exec(subInTerminal, 182, 27);
