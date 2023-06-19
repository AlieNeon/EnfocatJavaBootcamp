let nombre = () => {
  return "Alie";
};
console.log("🚀 ~ file: index.js:2 ~ nombre:", nombre());

function printBool(bool) {
  console.log("🚀 ~ file: index.js:5 ~ bool:", bool);
}
printBool(false);

function printInfinite(...args) {
  args.forEach(element => {
    console.log("🚀 ~ file: index.js:13 ~ printInfinite ~ element:", element)
  });
}

printInfinite(1, 2, 3, 4, 5)