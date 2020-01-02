const mySum = (...args) => {
  let base = 0;

  for (i in args) {
    base = base + args[i];
  }
  return base;
};

const nums = [1, 2, 3, 4];

// console.log(mySum(...nums));

const myObj = { key1: 15, key2: 30, key3: 45, key4: 60 };
const { key1, key2 } = myObj;

// console.log(key1);
// console.log(key2);

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i] * 3);
}

nums.forEach(a => console.log(a * 3));

const nums2 = nums.map(a => a * 3);

const nums3 = nums.filter(a => a === 3);
console.log(nums2);
console.log(nums3);
