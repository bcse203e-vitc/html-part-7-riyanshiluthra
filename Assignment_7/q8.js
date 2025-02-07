function bubbleSort(arr, order = 'asc') {
  let n = arr.length;
  
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
     
      if ((order === 'asc' && arr[j] > arr[j + 1]) || (order === 'desc' && arr[j] < arr[j + 1])) {
      
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  
  return arr;
}


const array = [12, 35, 1, 10, 34, 1];

console.log("Sorted in Ascending Order:", bubbleSort(array, 'asc')); 
console.log("Sorted in Descending Order:", bubbleSort(array, 'desc')); 
