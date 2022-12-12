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
// - / (dir)
//   - a (dir)
//     - e (dir)
//   - d (dir)

// Analyze command
// Keep track of folder we're in - track cd x, cd .. etc
// 2 collections? Files and dirs
// File objects have its name, its size, and the dir they belong to
// Dir objects have name, dir they're in, references to files they contain, and sub-dirs
// Check all files and their sizes, adding to the dir size they belong to

const data = exampleData.split("\n");
console.log(data);

let tree = [];

let index = 0;

data.map((command) => {
  let dirName = "";
  let nestedtree = [];
  let files = [];

  if (command.includes("$ cd ..")) {
    index--;
  }
  if (command.includes("$ cd ") && !command.includes(" ..")) {
    for (let i = 5; i < command.length; i++) {
      dirName += command[i];
    }
    if (tree[index]) {
      tree[index] = [...tree[index], dirName];
    } else {
      tree.push([dirName]);
    }
    index++;
  }
  console.log(tree);
});
