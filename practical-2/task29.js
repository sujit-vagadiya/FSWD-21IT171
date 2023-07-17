const fs = require('fs'); 
const path = require('path'); 
fs.writeFileSync('file.txt', 'Hello, World!'); 
console.log('File created.'); 
const content = fs.readFileSync('file.txt', 'utf8'); 
console.log(`File content: ${content}`); 
fs.appendFileSync('file.txt', '\nAppended content'); 
console.log('Content appended to the file.'); 
fs.unlinkSync('file.txt'); 
console.log('File deleted.'); 
fs.renameSync('student-data.txt', 'new-file.txt'); 
console.log('File renamed.'); 
const directoryPath = './'; 
fs.readdirSync(directoryPath).forEach((file) => { 
 const filePath = path.join(directoryPath, file); 
 const isDirectory = fs.statSync(filePath).isDirectory(); 
 const type = isDirectory ? 'Directory' : 'File'; 
 console.log(`${type}: ${file}`); 
}); 
