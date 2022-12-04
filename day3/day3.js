const input = require("./day3Input.js");

// Split string input into array of numbers, delimited by new line

const splitInput = input.input.split("\n");

let total = 0;

// Loop through input array, check length of each line, split line in half, and push each half to a different array
for (let i = 0; i < splitInput.length; i++) {
  const splitPoint = splitInput[i].length / 2;
  this["firstHalf" + i] = splitInput[i].slice(0, splitPoint);
  this["secondHalf" + i] = splitInput[i].slice(splitPoint);

// Loop through one of the halves and check each character to see if it is contained in the other half, if there is a match, check the value of the matching character and add it to the total
  for (let j = 0; j < this["secondHalf" + i].length; j++) {
    if (this["firstHalf" + i].includes(this["secondHalf" + i][j])) {
      matchValue = input.letterValues.values[this["secondHalf" + i][j]];
      total += matchValue;
      break
    }
  }
}

//Part 1 Answer
console.log(total);

