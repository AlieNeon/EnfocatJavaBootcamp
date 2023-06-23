// Theming
changeTheme("theme1");

function changeTheme(theme) {
  document.documentElement.classList.remove("theme1");
  document.documentElement.classList.remove("theme2");
  document.documentElement.classList.remove("theme3");
  document.documentElement.classList.add(theme);
}

let label = document.getElementsByTagName("label");
for (const element of label) {
  element.onclick = () => {
    changeTheme(element.getAttribute("for"));
  };
}

// Calculator
let display = [];

function render() {
  document.getElementById("display").innerHTML = display.join("");
}

function parse(arr) {
  let array = arr.slice().join("");
  let acc = [parseFloat(array)];
  while (array.length > 0) {
    let exp = array[0];
    array = array.substr(1);
    switch (exp) {
      case "+":
      case "-":
      case "x":
      case "/":
        acc.push([exp, parseFloat(array)]);
        break;
    }
  }
  return acc;
}

function compute(arr) {
  arr = parse(arr);
  console.log("🚀 ~ file: index.js:26 ~ compute ~ arr:", arr);
  let acc = arr.shift();
  for (const exp of arr) {
    if (!isNaN(exp[1])) {
      switch (exp[0]) {
        case "+":
          acc += exp[1];
          break;
        case "-":
          acc -= exp[1];
          break;
        case "x":
          acc *= exp[1];
          break;
        case "/":
          acc /= exp[1];
          break;
      }
    }
  }
  return [acc];
}

let btn = document.getElementsByTagName("button");
for (const element of btn) {
  switch (element.innerText) {
    case "DEL":
      element.onclick = () => {
        display.pop();
        render();
      };
      break;
    case "RESET":
      element.onclick = () => {
        display = [];
        render();
      };
      break;
    case "=":
      element.onclick = () => {
        display = compute(display);
        render();
      };
      break;
    default:
      element.onclick = () => {
        display.push(element.innerText);
        render();
      };
  }
}
