// Function declaration
function sayHello1() {
  console.log("Hello 1");
}

sayHello1();

// Function expression
const sayHello2 = function () {
  console.log("Hello 2");
};

sayHello2();

//Arrow function
const sayHello3 = () => {
  console.log("Hello 3");
};

sayHello3();

const example = function (number1, number2) {
  const sum = number1 * number2;
  if (sum > 100) {
    return "true";
  }
  return "false";
};

const result1 = example(10, 9);
console.log(result1);
