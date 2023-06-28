array = [];
import { getRandomEmoji } from "./emojis.js";

function updateVisuals() {
  document.getElementById("array").innerText = "[" + array + "]";
}

const funcs = {
  push: () => {
    array.push(getRandomEmoji());
    updateVisuals();
  },
  unshift: () => {
    array.unshift(getRandomEmoji());
    updateVisuals();
  },
  insert: () => {
    array.splice(document.getElementById("add").value, 0, getRandomEmoji());
    updateVisuals();
  },
  pop: () => {
    array.pop();
    updateVisuals();
  },
  shift: () => {
    array.shift();
    updateVisuals();
  },
  remove: () => {
    array.splice(document.getElementById("rem").value, 1);
    updateVisuals();
  },
};

updateVisuals();
let btn = document.getElementsByTagName("button");
for (const element of btn) {
  element.onclick = funcs[element.id];
}
