import { input } from "./day7Input.js";
const exampleData = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;

// FIND DIRECTORIES WITH AT MOST 100.000 In size and sum them.

// Analyze command
// Keep track of folder we're in - track cd x, cd .. etc
// 2 collections? Files and Dirs
// File objects have its name, its size, and the dir they belong to
// Dir objects have name, dir they're in, references to files they contain, and sub-dirs
// Check all files and their sizes, adding to the dir size they belong to

const data = exampleData.split("\n");
console.log(data);

let dir = 0;

let dirTree = [];

let upperDir = "";

let currentDir = dirTree[dir];

data.map((command) => {
  let dirName = "";
  if (command.includes("$ cd ..")) {
    dir - 1;
  }
  if (command.includes("$ cd ") && !command.includes(" ..")) {
    for (let i = 5; i < command.length; i++) {
      dirName += command[i];
    }
    console.log(dirName);
  }
});
console.log(dirTree);
