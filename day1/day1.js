const input = require("./day1Input");

// Split string input into array of numbers, delimited by new line

const splitInput = input.input.split("\n");

console.log(splitInput);

let elfTotals = [];

let sum = 0;

// Loop through input array, sum numbers and push to elfTotals array delimited by empty string

for (let i = 0; i < splitInput.length; i++) {
  if (splitInput[i] !== "") {
    sum += parseInt(splitInput[i]);
  } else {
    elfTotals.push(sum);
    sum = 0;
  }
}

// JavaScript radix sort implementation

const getDigit = (num, place) => {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
  }

const digitCount = (num) => {
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (nums) => {
    let maxDigits = 0;

    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}//

const radixSort = (arrOfNums) => {
    let maxDigitCount = mostDigits(arrOfNums)
    for (let k = 0; k < maxDigitCount; k++) {
      let digitBuckets = Array.from({ length: 10 }, () => []) // [[], [], [],...]
      for (let i = 0; i < arrOfNums.length; i++) {
        let digit = getDigit(arrOfNums[i], k)
        digitBuckets[digit].push(arrOfNums[i])
      }
      // New order after each loop
      arrOfNums = [].concat(...digitBuckets)
    }
    return arrOfNums
  }

// Part 1 solution - Sort the array and print the last element

console.log(radixSort(elfTotals)[elfTotals.length - 1])

// Part 2 solution - Sort the array and print the sum of the last three elements

console.log((radixSort(elfTotals)[elfTotals.length - 2]) + (radixSort(elfTotals)[elfTotals.length - 3]) + (radixSort(elfTotals)[elfTotals.length - 1]))
