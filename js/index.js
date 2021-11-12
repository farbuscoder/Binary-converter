const binary = document.getElementById("binary");
const decimal = document.getElementById("decimal");
const input_one = document.getElementById("input-one");
const input_two = document.getElementById("input-two");
const swap_btn = document.getElementById("swap-btn");
const convert_btn = document.getElementById("convert-btn");
const clear_btn = document.getElementById("clear-btn");

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

//Clear
function clearFunction() {
  input_one.value = "";
  input_two.value = "";
}

//Event listeners

convert_btn.addEventListener("click", binaryToDecimal);

clear_btn.addEventListener("click", clearFunction);
