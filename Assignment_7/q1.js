let number = Math.floor(Math.random() * 100) + 1;
let guess = 0;
let attempts = 0;

while (guess !== number && attempts < 5) {
  guess = parseInt(prompt("Guess the number between 1 and 100:"));
  attempts++;

  if (guess > number) {
    alert("Too high! Try again.");
  } else if (guess < number) {
    alert("Too low! Try again.");
  } else {
    alert("Congratulations! You've guessed the correct number.");
  }
}

if (guess !== number) {
  alert("Sorry, you've used all 5 attempts. The correct number was " + number);
}
