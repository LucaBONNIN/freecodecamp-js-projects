const btnCheck = document.getElementById("check-btn")
const btnClear = document.getElementById("clear-btn")
const result = document.getElementById("results-div")
const userInput = document.getElementById("user-input");

const checkValidNumber = input => {
  if(input === ""){
    alert("Please provide a phone number")
    return;
  }
  const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spacesDashes = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';

  const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
  );

  const pResult = document.createElement('p');
  pResult.className = 'results-text';
  phoneRegex.test(input) ? (pResult.style.color = '#00471b'): (pResult.style.color = '#4d3800');
  pResult.appendChild(
    document.createTextNode(
      `${phoneRegex.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`
    )
  );
  result.appendChild(pResult);
};

userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkValidNumber(userInput.value);
    userInput.value = '';
  }
});

btnCheck.addEventListener("click", () => {
  checkValidNumber(userInput.value);
  userInput.value = '';
});

btnClear.addEventListener("click", () => {
  result.textContent = '';
});