import { realInstructions } from "./day5Input.js";
// Crates moved 1 at a time
// Example data:
//     [D]
// [N] [C]
// [Z] [M] [P]
//  1   2   3

const instructions = realInstructions.split("\n");
console.log(instructions);

let numberInstructions = [];

instructions.map((instru, index) => {
  //   numberInstructions = [...numberInstructions, []];
  let instrux = [];
  if (instru.length > 18) {
    instrux.push(Number(instru[5] + instru[6]));
    instrux.push(Number(instru[13]));
    instrux.push(Number(instru[18]));
  } else {
    instrux.push(Number(instru[5]));
    instrux.push(Number(instru[12]));
    instrux.push(Number(instru[17]));
  }
  numberInstructions = [...numberInstructions, instrux];
});

const crates = [
  [" ", "C", " ", " ", " ", "L", " ", " ", "T"],
  [" ", "V", "R", "M", " ", "T", " ", " ", "B"],
  [" ", "F", "G", "H", "Q", "Q", " ", " ", "H"],
  [" ", "W", "L", "P", "V", "M", "V", " ", "F"],
  [" ", "P", "C", "W", "S", "Z", "B", "S", "P"],
  ["G", "R", "M", "B", "F", "J", "S", "Z", "D"],
  ["J", "L", "P", "F", "C", "H", "F", "J", "C"],
  ["Z", "Q", "F", "L", "G", "W", "H", "F", "M"],
];

const alphabet = "abcdefghijklmnopqrstuvwxyz"
  .split("")
  .map((char) => char.toUpperCase());

console.log(alphabet);

const stacks = 9;

let newStacks = [[], [], [], [], [], [], [], [], []];

crates.map((pile) => {
  pile.map((box, index) => {
    if (alphabet.includes(box)) {
      newStacks[index].push(box);
    }
  });
});
console.log(newStacks.map((pile) => pile.reverse()));

// Part 1  -----

// const lastStacks = numberInstructions.map((instrus) => {
//   const number = instrus[0];
//   const from = instrus[1] - 1;
//   const to = instrus[2] - 1;

//   for (let i = 0; i < number; i++) {
//     const removed = newStacks[from].pop();
//     newStacks[to].push(removed);
//   }
// });

// let solush = "";

// newStacks.map((pile) => {
//   solush += pile[pile.length - 1];
// });

// console.log(solush);

// Part 2 ----

const lastStacks = numberInstructions.map((instrus) => {
  const number = instrus[0];
  const from = instrus[1] - 1;
  const to = instrus[2] - 1;

  const stack = newStacks[to].concat(
    newStacks[from].splice(newStacks[from].length - number)
  );
  newStacks[to] = stack;
});

// console.log(newStacks[1].splice(newStacks[1].length - 3));
// console.log(newStacks[0].concat(newStacks[1].splice(newStacks[1].length - 3)));

console.log(newStacks);

let solush = "";

newStacks.map((pile) => {
  solush += pile[pile.length - 1];
});

console.log(solush);
