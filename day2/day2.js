// Quote of the day - "If speed mattered, it wouldn't be written in JavaScript" - Unknown

const input = require("./day2Input.js");

let wins = 0;
let draws = 0;
let tally = 0;

for (let i = 0; i < input.input.length; i++) {
  const element = input.input;
  if (element[i] === "A" && element[i + 2] === "Y") {
    wins++;
  } else if (element[i] === "B" && element[i + 2] === "Z") {
    wins++;
  } else if (element[i] === "C" && element[i + 2] === "X") {
    wins++;
  } else if (element[i] === "A" && element[i + 2] === "X") {
    draws++;
  } else if (element[i] === "B" && element[i + 2] === "Y") {
    draws++;
  } else if (element[i] === "C" && element[i + 2] === "Z") {
    draws++;
  }
}

for (let i = 0; i < input.input.length; i++) {
  const element = input.input;
  if (element[i] === "X" && element[i - 2] === "A") {
    // Play scissors to lose against rock, gain 3 points
    tally += 3;
  } else if (element[i] === "X" && element[i - 2] === "B") {
    //Play rock to lose against paper, gain 1 point
    tally += 1;
  } else if (element[i] === "X" && element[i - 2] === "C") {
    // Play paper to lose against scissors gain 2 points
    tally += 2;
  } else if (element[i] === "Y" && element[i - 2] === "A") {
    // Play rock to tie against rock, gain 4 points
    tally += 4;
  } else if (element[i] === "Y" && element[i - 2] === "B") {
    //Play paper to tie against paper, gain 5 point
    tally += 5;
  } else if (element[i] === "Y" && element[i - 2] === "C") {
    // Play scissors to tie against scissors, gain 6 points
    tally += 6;
  } else if (element[i] === "Z" && element[i - 2] === "A") {
    // Play paper to beat rock, gain 8 points
    tally += 8;
  } else if (element[i] === "Z" && element[i - 2] === "B") {
    //Play scissors to beat paper, gain 9 points
    tally += 9;
  } else if (element[i] === "Z" && element[i - 2] === "C") {
    // Play rock to beat scissors, gain 7 points
    tally += 7;
  }
}

let score = 0;

for (let i = 0; i < input.input.length; i++) {
  const element = input.input;
  if (element[i] === "X") {
    score = score + 1;
  } else if (element[i] === "Y") {
    score = score + 2;
  } else if (element[i] === "Z") {
    score = score + 3;
  }
}

console.log(score);
console.log(wins);
console.log(draws);

//Part 1 solution
console.log(wins * 6 + score + draws * 3);

// Part 2 solution
console.log(tally)