import { input } from "./day3input.js";

const data = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

// Data / setup

let duplicatesList = [];
let valuesSum = 0;

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const upperAbc = alphabet.map((letter) => {
  if (letter !== "0") return letter.toUpperCase();
});

const valuesList = alphabet.concat(upperAbc);

const inputArr = input.split("\n");

// PART 1 ---------

const solutions = inputArr.map((string) => {
  const firstPocket = string.split("");

  const secondPocket = firstPocket.splice(0, string.length / 2);

  for (let i = 0; i < firstPocket.length; i++) {
    const item = firstPocket[i];

    if (secondPocket.includes(item)) {
      duplicatesList.push(item);

      const value = valuesList.indexOf(item) + 1;

      valuesSum += value;
      break;
    }
  }
});

console.log(duplicatesList);
console.log(valuesSum);

// PART 2 ---------

// Examples

// vJrwpWtwJgWrhcsFMMfFFhFp
// jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
// PmmdzqPrVvPwwTWBwg  - should be r

// wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
// ttgJtRGJQctTZtZT
// CrZsJsPPZsGzwwsLwLmpwMDw - should be Z

const part2Data = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

const part2Example = part2Data.split("\n");

const groupsList = [];

const groupSize = 3;

let part2Sums = 0;

for (let i = 0; i < inputArr.length; i += groupSize) {
  const group = inputArr.slice(i, i + groupSize);
  console.log(group);
  groupsList.push(group);
}

groupsList.map((group) => {
  for (let i = 0; i < group[0].length; i++) {
    const letter = group[0][i];
    if (group[1].includes(letter) && group[2].includes(letter)) {
      const value = valuesList.indexOf(letter) + 1;
      part2Sums += value;
      break;
    }
  }
});
console.log(part2Sums);
