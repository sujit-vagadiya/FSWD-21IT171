const readline = require('readline');
const path = require('path');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a file path: ', (filePath) => {
  const fileExtension = path.extname(filePath);

  console.log('File Extension:', fileExtension);

  rl.close();
});