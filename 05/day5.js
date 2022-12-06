// Crates moved 1 at a time
// Example data:
//     [D]
// [N] [C]
// [Z] [M] [P]
//  1   2   3

const exampleInstructions = `move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

const instructions = exampleInstructions.split("\n");
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

console.log(numberInstructions);
const crates = [
  [" ", "D", " "],
  ["N", "C", " "],
  ["Z", "M", "P"],
];

const alphabet = "abcdefghijklmnopqrstuvwxyz"
  .split("")
  .map((char) => char.toUpperCase());

console.log(alphabet);

const stacks = 3;

let crateStacks = [[], [], []];

crates.map((pile) => {
  for (let i = 0; i < stacks; i++) {
    if (alphabet.includes(pile[i])) {
      crateStacks[i] = [pile[i], ...crateStacks[i]];
    }
  }
});

// const exampleInstructions = `move 1 from 2 to 1
// move 3 from 1 to 3
// move 2 from 2 to 1
// move 1 from 1 to 2`;

console.log(crateStacks);

function moveCrates(qty, from, to) {
  for (let i = 0; i < qty; i++) {
    const removed = crateStacks[from - 1].pop();
    crateStacks[to - 1].push(removed);
  }
}

numberInstructions.map((instrus) => {
  moveCrates(instrus[0], instrus[1], instrus[2]);
  console.log(instrus);
});
console.log(crateStacks);
