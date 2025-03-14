document.getElementById("check-btn").addEventListener("click", () => {
    const inputUsuario = document.getElementById("text-input").value.trim();
  
    if (!inputUsuario) {
      alert("Please input a value");
      return;
    }
  
    const inputLimpio = inputUsuario.toLowerCase().replace(/[^a-z0-9]/g, "");
    const inputInverso = inputLimpio.split("").reverse().join("");
  
    if (inputLimpio === inputInverso) {
      document.getElementById("result").textContent = `${inputUsuario} is a palindrome`;
    } else {
      document.getElementById("result").textContent = `${inputUsuario} is not a palindrome`;
    }
  });
  