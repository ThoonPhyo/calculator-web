const btn = document.getElementById("colorModeToggle");
let isDark = true;

btn.addEventListener("click", function () {
  isDark = !isDark;
  if (isDark) {
    document.documentElement.removeAttribute("data-theme");
    btn.textContent = "☀️ light";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    btn.textContent = "🌙 dark";
  }
});

function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value); // ✅
  const num2 = parseFloat(document.getElementById("num2").value); // ✅
  const operator = document.getElementById("operators").value;
  let result = 0;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        result = "Error: Division by zero";
      } else {
        result = num1 / num2;
      }
  }

  document.getElementById("result").value = result;
  if (!isNaN(result) && result !== "Error: Division by zero") {
    document.querySelector(".modal-content").classList.add("glow");
  } else {
    document.querySelector(".modal-content").classList.remove("glow");
  }
}

function resetCalculator() {
  document.getElementById("num1").value = ""; // ✅
  document.getElementById("num2").value = ""; // ✅
  document.getElementById("result").value = "";
  document.getElementById("operators").value = "+";
  document.querySelector(".modal-content").classList.remove("glow");
}
