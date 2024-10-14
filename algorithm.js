function insertionSort(arr) {
  // Loop from the second element to the last element
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]; // Store the current element (key)
    let j = i - 1;

    // Move elements of arr[0..i-1], that are greater than key, to one position ahead
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]; // Shift element to the right
      j--;
    }

    // Insert the key at the correct position
    arr[j + 1] = key;
  }

  return arr; // Return the sorted array
}

// Example usage:
const arr = [12, 11, 13, 5, 6];
const sortedArr = insertionSort(arr);
alert(sortedArr); // Output: [5, 6, 11, 12, 13]
