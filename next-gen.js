const mySum = (...args) => {
  let base = 0;

  for (i in args) {
    base = base + args[i];
  }
  return base;
};

const nums = [1, 2, 3, 4];

console.log(mySum(...nums));
