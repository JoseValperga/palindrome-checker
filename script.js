
const isPalindrome = (input) => {
  const cleanedInput = input.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reverseInput = cleanedInput.split("").reverse().join("");
  return cleanedInput === reverseInput;
};

const handleCheck = () => {
  const userInput = document.getElementById("text-input").value.trim();
  
  if (!userInput) {
    alert("Please input a value");
    return;
  }
  
  isPalindrome(userInput)
    ? (document.getElementById("result").textContent = `${userInput} is a palindrome`)
    : (document.getElementById("result").textContent = `${userInput} is not a palindrome`);
};

document.getElementById("check-btn").addEventListener("click", handleCheck);

document.getElementById("text-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleCheck();
  }
});


/*
const isPalindrome = (input) => {
  const cleanedInput = input.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reverseInput = cleanedInput.split("").reverse().join("");
  return cleanedInput === reverseInput;
};

document.getElementById("check-btn").addEventListener("click", () => {
  const userInput = document.getElementById("text-input").value.trim();
  if (!userInput) {
    alert("Please input a value");
    return;
  }
  isPalindrome(userInput)
    ? (document.getElementById(
        "result"
      ).textContent = `${userInput} is a palindrome`)
    : (document.getElementById(
        "result"
      ).textContent = `${userInput} is not a palindrome`);
});
*/

