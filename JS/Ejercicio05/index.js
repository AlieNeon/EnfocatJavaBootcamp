function sum(...nums) {
  let acc = 0;
  nums.forEach((num) => {
    acc += num;
  });
  return acc;
}

console.log(sum(1, 2, 4));

function concat(...strs) {
  let acc = "";
  strs.forEach((str) => {
    acc += str + " ";
  });
  return acc.trim();
}

console.log(concat("Alie", "Cejudo"));

function max(...nums) {
  let acc = -Infinity;
  nums.forEach((num) => {
    acc = num > acc ? num : acc;
  });
  return acc;
}

console.log(max(3, 5, 2));
