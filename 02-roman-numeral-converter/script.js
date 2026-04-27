const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const decimalToRoman = (input) => {
  const chiffres = {
    1000: "M", 900: "CM", 500: "D", 400: "CD",
    100: "C", 90: "XC", 50: "L", 40: "XL",
    10: "X", 9: "IX", 5: "V", 4: "IV", 1: "I"
  };
  
  let romanNumerals = Object.entries(chiffres).sort((a, b) => b[0] - a[0]);
  
  let s = "";
  let n = input;

  while (n > 0) {
    for (let [nombre, romain] of romanNumerals) { 
      nombre = parseInt(nombre);
      
      if (n >= nombre) {
        n -= nombre;
        s += romain;
        break;
      }
    }
  }
  
  return s;
};

const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);
  const maxInput = 3999;

  if (!inputInt) {
    output.textContent = "Please enter a valid number";
    return;
  } else if (inputInt < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
    return;
  } else if (inputInt > maxInput) {
    output.textContent = "Please enter a number less than or equal to 3999";
    return;
  }

  output.textContent = decimalToRoman(inputInt);
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});