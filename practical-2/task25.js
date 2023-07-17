const fs = require('fs'); 
const readline = require('readline'); 
const rl = readline.createInterface({ 
 input: process.stdin, 
 output: process.stdout
}); 
let employeeData = {}; 
rl.question('Enter employee name: ', (name) => { 
 employeeData.name = name; 
 
 rl.question('Enter employee age: ', (age) => { 
 employeeData.age = parseInt(age); 
 
 rl.question('Enter employee position: ', (position) => { 
 employeeData.position = position; 
 
 fs.writeFile('employee-data.json', JSON.stringify(employeeData), (err) =>
{ 
 if (err) { 
 console.error('Error writing to file:', err); 
 } else { 
 console.log('Employee data has been successfully written to "employee-data.json".');
} 
 
rl.close(); 
}); 
}); 
}); 
}); 
