function isPalindrome(str) {
 
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}
console.log(isPalindrome("A man, a plan, a canal, Panama")); 
console.log(isPalindrome("Hello, World!"));


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Palindrome Checker</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 50px;
    }
    input {
      padding: 10px;
      font-size: 16px;
      width: 300px;
    }
    h2 {
      color: green;
    }
    .not-palindrome {
      color: red;
    }
  </style>
</head>
<body>

  <h1>Palindrome Checker</h1>

  <input type="text" id="inputPhrase" placeholder="Enter a word or sentence" oninput="checkPalindrome()" />
  <h2 id="result"></h2>

  <script>
    function isPalindrome(str) {
      const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
      const reversedStr = cleanedStr.split('').reverse().join('');
      return cleanedStr === reversedStr;
    }

    function checkPalindrome() {
      const input = document.getElementById("inputPhrase").value;
      const resultElement = document.getElementById("result");

      if (isPalindrome(input)) {
        resultElement.textContent = "It's a palindrome!";
        resultElement.classList.remove('not-palindrome');
      } else {
        resultElement.textContent = "It's not a palindrome.";
        resultElement.classList.add('not-palindrome');
      }
    }
  </script>

</body>
</html>

