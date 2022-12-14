import { input, exampleData } from "./day7Input.js";

// `$ cd /
// $ ls
// dir a
// 14848514 b.txt
// 8504156 c.dat
// dir d
// $ cd a
// $ ls
// dir e
// 29116 f
// 2557 g
// 62596 h.lst
// $ cd e
// $ ls
// 584 i
// $ cd ..
// $ cd ..
// $ cd d
// $ ls
// 4060174 j
// 8033020 d.log
// 5626152 d.ext
// 7214296 k`;

// Don't care about file names, just make anonymous objects { }

const data = exampleData.split("\n");

let currentDir = [];

let files = [];

let dirs = [];

data.map((line) => {
  if (line[0] === "$") {
    const split = line.split(" ");
    if (split[1] == "cd") {
      if (split[2] == "..") {
        currentDir.pop();
      } else if (split[2] == "/") {
        return;
      } else {
        currentDir.push(split[2]);
      }
    }
  } else {
    const [size, name] = line.split(" ");
    if (size == "dir") {
      dirs.push({ size: 0, path: currentDir.join("/") + `/${name}` });
    } else {
      files.push({ size: size, name: name, path: currentDir.join("/") });
    }
  }
});

const sizedFiles = files.filter((file) => Number(file.size) <= 100000);

console.log(sizedFiles);
console.log(dirs);

// Analyze command
// Keep track of folder we're in - track cd x, cd .. etc
// 2 collections? Files and dirs
// File objects have its name, its size, and the dir they belong to
// Dir objects have name, dir they're in, references to files they contain, and sub-dirs
// Check all files and their sizes, adding to the dir size they belong to
