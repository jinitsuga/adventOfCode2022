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

for (let i = 0; i < part2Example.length; i += groupSize) {
  const group = part2Example.slice(i, i + groupSize);
  console.log(group);
  groupsList.push(group);
}

console.log(groupsList);
