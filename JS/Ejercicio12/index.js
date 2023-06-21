// 1 Substituye todos los elementos por batidos
let menu = [..."🍔🌯🍣🍕🍜🍱🍙🍘🥩"];
menu = menu.map((_) => "🥛");
console.log("🚀 ~ file: index.js:5 ~ menu:", menu.join(""));

// 2 Find a piña
let pinya = [..."🍕🍕🍍🍕🍕"];
console.log(
  "🚀 ~ file: index.js:11 ~ pinya.includes(🍍):",
  pinya.includes("🍍")
);

// 3 Remove piña
pinya = pinya.filter((i) => i !== "🍍");
console.log("🚀 ~ file: index.js:14 ~ pinya:", pinya.join(""));

// 4 Convierte todas las fresas en 🍄
let frutas = [..."🍓🍋🍓🍋🍓"];
frutas = frutas.map((i) => (i === "🍓" ? "🍄" : i));
console.log("🚀 ~ file: index.js:22 ~ frutas:", frutas.join(""));

// 5 Añade el siguiente icono 🥵 inmediatamente después del cada 🌶
let hot = [..."🌶🥛🌶🥛🌶🥛"];
hot = hot.map((i) => (i === "🌶" ? "🌶🥵" : i));
console.log("🚀 ~ file: index.js:27 ~ hot:", hot.join(""));

// 6 Añade una 🃏 cartas comodín entre medio de dos cartas
let deck = [..."🎴🎴🎴🃏🎴🎴🎴"];
deck = deck.reduce((acc, i) => acc + i + "🃏","");
console.log("🚀 ~ file: index.js:31 ~ deck:", deck);
