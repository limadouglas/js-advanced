const sum = (...numbers) => {
  let total = 0;

  for (let num of numbers) {
    total += num;
  }

  return total;
  // return numbers.reduce((accNum, num) => accNum + num, 0);
};

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
