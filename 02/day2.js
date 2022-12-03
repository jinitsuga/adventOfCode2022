import { input } from "./day2input.js";

// A = rock = 1
// B = paper = 2
// C = scissors = 3

// My choices

// X = rock = 1
// Y = paper = 2
// Z = scissors = 3

// ROUND SCORES: loss: 0, draw: 3, win: 6

const rounds = input.split("\n");
rounds.pop();
rounds.pop();
rounds.shift();

let choiceScore = 0;
let roundScore = 0;

const getScore = () => {
  rounds.map((round) => {
    const winIndicator = round[2];
    const opponent = round[0];
    // rock choices
    if (opponent == "A") {
      if (winIndicator == "X") {
        choiceScore += 3;
        roundScore += 0;
      } else if (winIndicator == "Y") {
        choiceScore += 1;
        roundScore += 3;
      } else if (winIndicator == "Z") {
        choiceScore += 2;
        roundScore += 6;
      }
    }
    // paper choices
    if (opponent == "B") {
      if (winIndicator == "X") {
        choiceScore += 1;
        roundScore += 0;
      } else if (winIndicator == "Y") {
        choiceScore += 2;
        roundScore += 3;
      } else if (winIndicator == "Z") {
        choiceScore += 3;
        roundScore += 6;
      }
    }
    // scissors choices
    if (opponent == "C") {
      if (winIndicator == "X") {
        choiceScore += 2;
        roundScore += 0;
      } else if (winIndicator == "Y") {
        choiceScore += 3;
        roundScore += 3;
      } else if (winIndicator == "Z") {
        choiceScore += 1;
        roundScore += 6;
      }
    }
  });
};
getScore();

let totalScore = choiceScore + roundScore;

console.log(totalScore);
