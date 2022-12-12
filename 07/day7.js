import { input, exampleData } from "./day7Input.js";

// Analyze command
// Keep track of folder we're in - track cd x, cd .. etc
// 2 collections? Files and dirs
// File objects have its name, its size, and the dir they belong to
// Dir objects have name, dir they're in, references to files they contain, and sub-dirs
// Check all files and their sizes, adding to the dir size they belong to

const data = exampleData.split("\n");

const files = [];
const directories = [];

let tree = [];

let currentDir = "";

let index = 0;

// Splitting files and directories (ignoring "$ ls" command, probably a mistake)

data.map((command) => {
  let dirName = "";

  if (command.includes("$ cd ..")) {
    index--;
    return;
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
    currentDir = dirName;
    return;
  }
  if (command.includes("dir ")) {
    for (let i = 4; i < command.length; i++) {
      dirName += command[i];
    }
    directories.push({ name: dirName, parent: currentDir });
    return;
  }
  if (command != "$ ls") {
    const file = command.split(" ");
    const fileSize = Number(file[0]);
    const fileName = file[1];

    const fileData = { name: fileName, size: fileSize, parent: currentDir };
    files.push(fileData);
  }
});

console.log(directories);
console.log(files);

// Adding size from FILES to dirs

const dirsWithFiles = directories.map((dir) => {
  let size = 0;
  const dirSize = files
    .filter((file) => file.parent === dir.name)
    .map((file) => (size += file.size));
  return { ...dir, size: size };
});
console.log(dirsWithFiles);

// Adding size from children DIRS to dirs
