// Crates moved 1 at a time
// Example data:
//     [D]
// [N] [C]
// [Z] [M] [P]
//  1   2   3

// move 1 from 2 to 1
// move 3 from 1 to 3
// move 2 from 2 to 1
// move 1 from 1 to 2

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
      crateStacks[i] = [...crateStacks[i], pile[i]];
    }
  }
});

console.log(crateStacks.map((stack) => stack.reverse()));
