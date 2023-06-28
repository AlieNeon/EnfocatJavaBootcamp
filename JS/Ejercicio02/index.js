// * Data types

let types = {
  num: 1,
  bool: true,
  str: "queso",
  none: null,
  undef: undefined,
  sym: Symbol(1),
  arr: [],
  obj: {},
  fun: function () {},
};

function printDataType(content) {
  console.log("Data:", content, "Type:", typeof content);
}

for (const key in types) {
  if (Object.hasOwnProperty.call(types, key)) {
    const element = types[key];
    printDataType(element);
  }
}
