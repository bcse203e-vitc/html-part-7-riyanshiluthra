function findSecondLargest(arr) {
  const uniqueArr = [...new Set(arr)];
  uniqueArr.sort((a, b) => b - a);

  if (uniqueArr.length >= 2) {
    return uniqueArr[1];
  } else {
    return "Array doesn't have enough elements.";
  }
}

function findThirdLargest(arr) {
  const uniqueArr = [...new Set(arr)];
  uniqueArr.sort((a, b) => b - a);

  if (uniqueArr.length >= 3) {
    return uniqueArr[2];
  } else {
    return "Array doesn't have enough elements.";
  }
}


const array = [12, 35, 1, 10, 34, 1];

console.log("Second Largest Number:", findSecondLargest(array)); 
console.log("Third Largest Number:", findThirdLargest(array));  
