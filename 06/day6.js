import { input } from "./day6Input.js";

// EDITED FOR PART 2 SOLUTION
// just change makeMarkers fn i + X values from 14 to 4  and 13 to 3 for part 1 solush ---->

const exampleData = input;
console.log(exampleData.length);

let markers = [];
let solutions = [];

function makeMarkers(signal) {
  for (let i = 0; i < signal.length; i++) {
    if (signal[i + 13] != undefined) {
      const marker = signal.substring(i, i + 14);
      markers.push(marker);
    }
  }
}

makeMarkers(exampleData);
console.log(markers);

markers.map((marker) => {
  let repeats = marker.length;

  for (let i = 0; i < marker.length; i++) {
    let copy = marker.split("");
    let letter = copy.splice(i, 1);
    if (copy.includes(letter[0])) {
      repeats--;
    }
  }
  if (repeats === marker.length) {
    solutions.push(marker);
    console.log(marker);
  }
});
console.log(solutions[0]);

console.log(exampleData.indexOf(solutions[0]) + 14);
