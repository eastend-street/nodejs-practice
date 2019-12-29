const mySum = (...args) => {
  let base = 0;

  for (i in args) {
    base = base + args[i];
  }
  return base;
};

const nums = [1, 2, 3, 4];

const myObj = { key1: 15, key2: 30, key3: 45, key4: 60 };

console.log(mySum(...nums));
