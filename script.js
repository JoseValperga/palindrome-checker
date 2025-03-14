document.getElementById("check-btn").addEventListener("click", () => {
    const userInput = document.getElementById("text-input").value.trim();
  
    if (!userInput) {
      alert("Please input a value");
      return;
    }
  
    const cleanedInput = userInput.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reverseInput = cleanedInput.split("").reverse().join("");
  
    if (cleanedInput === reverseInput) {
      document.getElementById("result").textContent = `${userInput} is a palindrome`;
    } else {
      document.getElementById("result").textContent = `${userInput} is not a palindrome`;
    }
  });
  