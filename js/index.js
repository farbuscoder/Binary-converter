const binary = document.getElementById("binary");
const decimal = document.getElementById("decimal");
const input_one = document.getElementById("input-one");
const input_two = document.getElementById("input-two");
const swap_btn = document.getElementById("swap-btn");
const convert_btn = document.getElementById("convert-btn");

//Binary to decimal

const binaryToDecimal = () => {
  let arr = input_one.value;

  if (arr == "") {
    alert("Ingrese un numero");
  } else {
    let newArray = [];
    let binaryNumber = arr
      .split("")
      .reverse()
      .forEach((bit, i) => {
        newArray.push(bit * Math.pow(2, [i]));
      }); //

    let decimal = newArray.reduce((acc, index) => acc + index);
    console.log(decimal);

    input_two.value = decimal;

    return decimal;
  }
};

//Decimal to binary

const decimalToBinary = () => {
  let number = 35890;
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

  const binary = newArray.reverse();
  console.log(binary);
};

decimalToBinary();

//Change binary to decimal
function changeDecimal() {
  decimal.innerHTML = `<p>Binary</p>`;
}

//Change decimal to binary
function changeBinary() {
  decimal;
}
//Event listeners

convert_btn.addEventListener("click", binaryToDecimal);
