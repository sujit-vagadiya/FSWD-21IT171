const readline = require('readline');
const path = require('path');
const fs = require('fs');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter the first file path: ', (filePath1) => {
  rl.question('Enter the second file path: ', (filePath2) => {
    // Resolve the absolute paths
    const absolutePath1 = path.resolve(filePath1);
    const absolutePath2 = path.resolve(filePath2);
    const isSameFile = fs.existsSync(absolutePath1) &&
      fs.existsSync(absolutePath2) &&
      fs.statSync(absolutePath1).ino === fs.statSync(absolutePath2).ino;
    console.log('The two file paths refer to the same file:', isSameFile);
    rl.close();
  });
});