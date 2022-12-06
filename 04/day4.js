// Example testing
import { input } from "./day4input.js";

// PART 1 ------

const exampleData = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

const data = input.split("\n");

const groups = data.map((group) => group.split(","));

const test = groups.map((group) => {
  return group.map((area) => {
    return area.split("-").map(Number);
  });
});

console.log(test);

let containedPairs = 0;
let pairedOverlaps = 0;

for (let i = 0; i < test.length; i++) {
  const pairOne = test[i][0];
  const pairTwo = test[i][1];

  // first pair includes second
  if (
    (pairOne[0] <= pairTwo[0] && pairOne[1] >= pairTwo[1]) ||
    (pairOne[0] >= pairTwo[0] && pairOne[1] <= pairTwo[1])
  ) {
    console.log("repeats", i);
    containedPairs++;
  }
  if (pairOne[0] < pairTwo[0] && pairOne[1] < pairTwo[0]) {
    continue;
  }
  if (pairTwo[0] < pairOne[0] && pairTwo[1] < pairOne[0]) {
    continue;
  }
  pairedOverlaps++;
}
console.log(containedPairs);
console.log(pairedOverlaps);
