const binary = document.getElementById("binary");
const decimal = document.getElementById("decimal");
const input_one = document.getElementById("input-one");
const input_two = document.getElementById("input-two");
const swap_btn = document.getElementById("swap-btn");
const convert_btn = document.getElementById("convert-btn");
const clear_btn = document.getElementById("clear-btn");

//Decimal to binary

const decimalToBinary = () => {
  let number = input_one.value;
  let count = number.toString();
  let array = [];

  for (let i = 2; i <= number; i = i) {
    array.push((number = number / i));
    console.log(number);
  }

  const newArray = array.map((digit) => Math.floor((digit * 2) % 2));
  console.log(newArray);

  if (newArray.length <= array.length) {
    newArray.push(1);
    console.log(newArray);
  } else {
    console.log("do nothing");
  }

  console.log(newArray);

  const binary = newArray.reverse().join("");

  input_two.value = binary;

  console.log(binary);
  return binary;
};

//Clear
function clearFunction() {
  input_one.value = "";
  input_two.value = "";
}

decimalToBinary();

//Event listeners

convert_btn.addEventListener("click", decimalToBinary);

clear_btn.addEventListener("click", clearFunction);
