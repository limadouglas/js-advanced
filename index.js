const f5 = async() => {
  console.log("executou o f5");
};

const f4 = async() => {
  console.log("executou o f4");
};

const f3 = async() => {
  const timer = Date.now() + 5000;
  while (timer > Date.now()) {}
  console.log("executou o f3");
};

const f2 = async() => {
  setTimeout(f4, 1000);
  f3();
};
const f1 = async() => {
  f2();
};

const main = async () => {
  f1();
};

setTimeout(f5, 2000);

main();
