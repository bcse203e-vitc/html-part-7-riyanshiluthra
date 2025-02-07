function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = [];

  arr.forEach(item => {
    if (seen.has(item)) {
      duplicates.push(item);
    } else {
      seen.add(item);
    }
  });

  return duplicates;
}

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

const array = [1, 2, 3, 4, 5, 1, 2, 6, 7, 8, 9, 2];

console.log("Duplicates:", findDuplicates(array)); 
console.log("Unique Array:", removeDuplicates(array)); 
