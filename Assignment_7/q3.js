<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 50px;
    }
    input, button {
      margin: 10px;
      padding: 10px;
      font-size: 16px;
    }
    button {
      cursor: pointer;
    }
  </style>
</head>
<body>

  <h1>Calculator</h1>

  <div>
    <label for="num1">Enter First Number: </label>
    <input type="number" id="num1" />
  </div>

  <div>
    <label for="num2">Enter Second Number: </label>
    <input type="number" id="num2" />
  </div>

  <div>
    <label for="operation">Select Operation: </label>
    <select id="operation">
      <option value="add">Addition (+)</option>
      <option value="subtract">Subtraction (-)</option>
      <option value="multiply">Multiplication (×)</option>
      <option value="divide">Division (÷)</option>
      <option value="modulus">Modulus (%)</option>
      <option value="exponentiate">Exponentiation (**)</option>
    </select>
  </div>

  <button onclick="calculate()">Calculate</button>

  <h2>Result: <span id="result">0</span></h2>

  <script>
    function calculate() {
      let num1 = parseFloat(document.getElementById("num1").value);
      let num2 = parseFloat(document.getElementById("num2").value);
      let operation = document.getElementById("operation").value;
      let result = 0;

      switch (operation) {
        case "add":
          result = num1 + num2;
          break;
        case "subtract":
          result = num1 - num2;
          break;
        case "multiply":
          result = num1 * num2;
          break;
        case "divide":
          if (num2 !== 0) {
            result = num1 / num2;
          } else {
            result = "Error: Division by zero";
          }
          break;
        case "modulus":
          result = num1 % num2;
          break;
        case "exponentiate":
          result = Math.pow(num1, num2);
          break;
        default:
          result = "Invalid Operation";
      }

      document.getElementById("result").innerText = result;
    }
  </script>

</body>
</html>
