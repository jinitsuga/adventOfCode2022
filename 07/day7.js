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

const data = input.split("\n");

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
        currentDir.push(split[2]);
      } else {
        currentDir.push(split[2]);
      }
    }
  } else {
    const [size, name] = line.split(" ");
    if (size == "dir") {
      dirs.push({
        size: 0,
        name: name,
        path: (currentDir.join() + `,${name}`).split(","),
      });
    } else {
      files.push({
        size: size,
        path: currentDir.join().split(","),
      });
    }
  }
});

let dirSizes = [];

dirs.map((dir) => {
  let dirSize = 0;
  files.map((file) => {
    const filePath = file.path;
    const realFilePath = filePath.slice(0, filePath.length - 1);
    const realFilePath2 = filePath.slice(0, filePath.length - 2);
    const realFilePath3 = filePath.slice(0, filePath.length - 3);

    if (file.path.join("/") == dir.path.join("/")) {
      dirSize += Number(file.size);
    }
    if (realFilePath.join("/") == dir.path.join("/")) {
      dirSize += Number(file.size);
    }
    if (realFilePath2.join("/") == dir.path.join("/")) {
      dirSize += Number(file.size);
    }
    if (realFilePath3.join("/") == dir.path.join("/")) {
      dirSize += Number(file.size);
    }
  });
  dirSizes.push({ dir: dir.name, size: dirSize, path: dir.path });
});

console.log(files);

const filteredDirs = dirSizes.filter((dir) => dir.size <= 100000);

console.log(filteredDirs);

let sum = 0;

for (let i = 0; i < filteredDirs.length; i++) {
  sum += filteredDirs[i].size;
}
console.log(sum);

// Analyze command
// Keep track of folder we're in - track cd x, cd .. etc
// 2 collections? Files and dirs
// File objects have its name, its size, and the dir they belong to
// Dir objects have name, dir they're in,
// Check all files and their sizes, adding to the dir size they belong to
