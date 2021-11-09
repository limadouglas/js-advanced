const buyCart = [
  { name: "Caneta", price: 7.99, qtd: 10, fragile: true },
  { name: "Impressora", price: 649.5, qtd: 1, fragile: true },
  { name: "Caderno", price: 27.1, qtd: 4, fragile: false },
  { name: "Lapis", price: 5.82, qtd: 3, fragile: false },
  { name: "Tesoura", price: 19.2, qtd: 1, fragile: false },
];

Array.prototype.myFilter = function (fn) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

console.log(buyCart.myFilter((item) => item.qtd > 1));

//reduce: my solution
const fnTotalItem = (previousValue, currentValue) => [
  ...previousValue, currentValue.qtd * currentValue.price,
];
const fnTotalCart = (previousValue, currentValue) =>
  previousValue + currentValue.qtd * currentValue.price;

const totalItems = buyCart.reduce(fnTotalItem, []);
const totalCart = buyCart.reduce(fnTotalCart, 0);
console.log("\n\nREDUCE MY SOLUTION");
console.log("totalItems: ", totalItems);
console.log("totalCart: ", totalCart);

//reduce: teach solution
const getTotal = (item) => item.qtd * item.price;
const some = (acc, el) => acc + el;
const totalItems2= buyCart.map(getTotal);
const totalGeneral = buyCart.map(getTotal).reduce(some);
console.log("\n\nREDUCE TEACH SOLUTION");
console.log("totalItems: ", totalItems2);
console.log("totalCart: ", totalGeneral);