let number = Math.floor(Math.random() * 100) + 1;
let guess = 0;

while (guess !== number) {
  guess = parseInt(prompt("Guess the number between 1 and 100:"));
  
  if (guess > number) {
    alert("Too high! Try again.");
  } else if (guess < number) {
    alert("Too low! Try again.");
  } else {
    alert("Congratulations! You've guessed the correct number.");
  }
}
