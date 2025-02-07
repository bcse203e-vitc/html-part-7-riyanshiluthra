<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Character and Word Counter</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 50px;
    }
    input, button {
      padding: 10px;
      font-size: 16px;
      width: 300px;
      margin: 10px;
    }
    #result {
      margin-top: 20px;
    }
    .highlight {
      background-color: yellow;
    }
  </style>
</head>
<body>

  <h1>Character and Word Counter</h1>

  <textarea id="inputText" rows="6" placeholder="Type your text here..." oninput="countCharactersWords()"></textarea>
  <div id="result">
    <p>Character Count (including spaces): <span id="charCount">0</span></p>
    <p>Word Count: <span id="wordCount">0</span></p>
    <p>Highlighted Text: <span id="highlightedText"></span></p>
  </div>

  <script>
    function countCharactersWords() {
      const text = document.getElementById("inputText").value;
      const charCount = text.length;
      const words = text.trim().split(/\s+/);
      const wordCount = words.filter(word => word !== '').length;
      const wordMap = {};
      words.forEach(word => {
        word = word.toLowerCase(); 
        if (wordMap[word]) {
          wordMap[word]++;
        } else {
          wordMap[word] = 1;
        }
      });

      const highlightedText = words.map(word => {
        if (wordMap[word.toLowerCase()] > 1) {
          return `<span class="highlight">${word}</span>`;
        }
        return word;
      }).join(' ');
      document.getElementById("charCount").innerText = charCount;
      document.getElementById("wordCount").innerText = wordCount;
      document.getElementById("highlightedText").innerHTML = highlightedText;
    }
  </script>

</body>
</html>
