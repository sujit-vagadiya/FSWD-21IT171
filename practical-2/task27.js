const fs = require('fs'); 
const path = require('path'); 
// Function to create a backup of a file
function backupFile(filePath) { 
 const backupPath = `${filePath}.bak`; 
 fs.copyFileSync(filePath, backupPath); 
 console.log(`Backup created: ${backupPath}`); 
} 
// Function to restore a file from backup
function restoreFile(backupPath) { 
 const filePath = backupPath.slice(0, -4); 
 fs.copyFileSync(backupPath, filePath); 
 console.log(`File restored: ${filePath}`); 
} 
// Usage example
const fileToBackup = 'student-data.txt'; 
// Backup the file
backupFile(fileToBackup); 
// Simulate changes to the file (for demonstration purposes)
fs.appendFileSync(fileToBackup, 'Some additional content.'); 
// Restore the file from backup
restoreFile(`${fileToBackup}.bak`); 