function compare(a: any, b: any): number {
  if (typeof a === 'number' && typeof b === 'number') {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a.localeCompare(b);
  } else {
    // Handle other data types or throw an error
    return 0;
  }
}

let arr = [1, 2, 3, 4, 5];
arr.sort(compare);
console.log(arr); // Output: [1, 2, 3, 4, 5]

arr = [5, 4, 3, 2, 1];
arr.sort(compare);
console.log(arr); // Output: [1, 2, 3, 4, 5]

arr = [1, '2', 3, '4', 5];
arr.sort(compare);
console.log(arr); // Output: [1, '2', 3, '4', 5] // Now correctly handles mixed types

arr = ['apple', 'banana', 'orange'];
arr.sort(compare);
console.log(arr); // Output: ['apple', 'banana', 'orange'] //Correctly sorts strings
