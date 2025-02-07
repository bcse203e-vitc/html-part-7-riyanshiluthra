<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Event-Driven Background Color Changer</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      transition: background-color 0.5s ease;
    }
    button {
      padding: 15px 30px;
      font-size: 16px;
      margin: 10px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <div>
    <button id="redButton">Red</button>
    <button id="greenButton">Green</button>
    <button id="blueButton">Blue</button>
    <button id="randomButton">Random</button>
  </div>

  <script>
    function changeBackgroundColor(color) {
      document.body.style.backgroundColor = color;
    }
    document.getElementById("redButton").addEventListener("click", function() {
      changeBackgroundColor("red");
    });

    document.getElementById("greenButton").addEventListener("click", function() {
      changeBackgroundColor("green");
    });

    document.getElementById("blueButton").addEventListener("click", function() {
      changeBackgroundColor("blue");
    });
    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
    document.getElementById("randomButton").addEventListener("click", function() {
      const randomColor = getRandomColor();
      changeBackgroundColor(randomColor);
    });
  </script>

</body>
</html>
