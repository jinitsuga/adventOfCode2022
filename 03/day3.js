import { input } from "./day3input.js";

// Example data:

// vJrwpWtwJgWrhcsFMMfFFhFp -- p
// jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL -- L
// PmmdzqPrVvPwwTWBwg -- P
// wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn - v
// ttgJtRGJQctTZtZT -- t
// CrZsJsPPZsGzwwsLwLmpwMDw -- s

// split string in 2
// determine shared character
// find the value of the shared character
// sum all of them

const data = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

let duplicatesList = [];
let valuesSum = 0;

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const upperAbc = alphabet.map((letter) => {
  if (letter !== "0") return letter.toUpperCase();
});

const valuesList = alphabet.concat(upperAbc);

const exampleArr = input.split("\n");

const solutions = exampleArr.map((string) => {
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
