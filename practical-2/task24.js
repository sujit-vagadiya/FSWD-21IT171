const fs = require('fs'); 
// Read the file
fs.readFile('student-data.txt', 'utf8', (err, data) => { 
 if (err) { 
 console.error(err); 
 return; 
 } 
 // Split the file content into lines
 const lines = data.split('\n'); 
 // Iterate over each line and check the conditions
 lines.forEach((line) => { 
 const [name, cgpa] = line.split(','); 
 if (name.includes('Ma') && parseFloat(cgpa) > 7) { 
 console.log(`Student: ${name}, CGPA: ${cgpa}`); 
 } 
 }); 
}); 