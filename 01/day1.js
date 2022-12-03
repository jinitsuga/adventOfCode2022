import { input } from "./day1nput.js";

const calories = input;

const caloriesArr = calories.split("\n");

let limit = 11;

const elvesCalories = [];

let lowerLimit = 0;

caloriesArr.map((amount, index) => {
  if (amount === "") {
    let elfCalories = 0;
    for (let i = lowerLimit; i < index; i++) {
      elfCalories = elfCalories + Number(caloriesArr[i]);
    }
    elvesCalories.push(elfCalories);
    lowerLimit = index;
  }
});

const orderedElves = elvesCalories.sort((a, b) => b > a);

const mostCalos = orderedElves[0] + orderedElves[1] + orderedElves[2];

console.log(mostCalos);
