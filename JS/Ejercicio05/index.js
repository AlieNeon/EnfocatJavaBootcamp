function sum(...nums) {
  return nums.reduce((acc, i) => acc + i);
}

console.log(sum(1, 2, 4));

function concat(...strs) {
  return strs.reduce((acc, i) => acc + " " + i);
}

console.log(concat("Alie", "Cejudo"));

function max(...nums) {
  return nums.reduce((acc, i) => (acc > i ? acc : i));
}

console.log(max(3, 5, 2));
