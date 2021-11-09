const buyCart = [
  { name: "Caneta", price: 7.99, qtd: 10, fragile: true },
  { name: "Impressora", price: 649.5, qtd: 1, fragile: true },
  { name: "Caderno", price: 27.1, qtd: 4, fragile: false },
  { name: "Lapis", price: 5.82, qtd: 3, fragile: false },
  { name: "Tesoura", price: 19.2, qtd: 1, fragile: false },
];

// 1 => fragile = true
const isFragile = (item) => item.fragile;
const fragiles = buyCart.filter(isFragile);
console.log("fragiles: ", fragiles);

// 2 => qtd * price =total
const total = (item) => item.price * item.qtd;
const totalsPerItem = buyCart.map(total);
console.log("total per item: ", totalsPerItem);

//3 => average totals
const average = (acc, el, index, arr) => {
  const total = acc + (el.price * el.qtd);
  return arr.length === index + 1 ? total / arr.length : total;
};
const averateTotal = buyCart.reduce(average, 0);
console.log("average total: ", averateTotal);
