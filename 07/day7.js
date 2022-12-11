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

const data = exampleData.split("\n");
console.log(data);

data.map((command) => {
  if (command.includes("$")) {
    console.log("comando de terminal");
  }
});
