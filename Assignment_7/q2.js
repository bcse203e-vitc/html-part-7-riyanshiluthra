// FizzBuzz with custom rules
let divRule1 = parseInt(prompt("Enter the first divisor:"));
let divRule2 = parseInt(prompt("Enter the second divisor:"));
let word1 = prompt("Enter the word for the first divisor:");
let word2 = prompt("Enter the word for the second divisor:");
let wordBoth = prompt("Enter the word for both divisors:");

for (let i = 1; i <= 50; i++) {
  if (i % divRule1 === 0 && i % divRule2 === 0) {
    console.log(wordBoth);
  } else if (i % divRule1 === 0) {
    console.log(word1);
  } else if (i % divRule2 === 0) {
    console.log(word2);
  } else {
    console.log(i);
  }
}
