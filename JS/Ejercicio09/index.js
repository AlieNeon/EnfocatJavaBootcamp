function replaceAforO(str) {
  return str.replace(/a/g, "o").replace(/A/g, "O");
}

console.log(replaceAforO("Hola buenos dias"));

function startsWithAca(str) {
  return str.startsWith("aca");
}

console.log(startsWithAca("academia"));
console.log(startsWithAca("escuela"));

function saludos(str) {
  if (str === "hola") {
    return "¡Buenos dias! ".repeat(3);
  }
}

console.log(saludos("hola"));
