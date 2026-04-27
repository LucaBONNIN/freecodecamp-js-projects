const btn = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const resultDiv = document.getElementById("result");

btn.addEventListener("click", function () {
if (input.value === "") {
    alert("Please input a value");
    return;
}

const cleaned = input.value.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
const reversed = cleaned.split("").reverse().join("");

resultDiv.classList.remove("is-palindrome", "not-palindrome");

if (cleaned === reversed) {
    resultDiv.innerText = `"${input.value}" is a palindrome`;
    resultDiv.classList.add("is-palindrome");
} else {
    resultDiv.innerText = `"${input.value}" is not a palindrome`;
    resultDiv.classList.add("not-palindrome");
}
});