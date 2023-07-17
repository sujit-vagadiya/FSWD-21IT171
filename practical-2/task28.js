const fs = require('fs'); 
const path = require('path'); 
// Function to create file/folder structure recursively
function createStructure(basePath, structure) { 
 for (const item of structure) { 
 const itemPath = path.join(basePath, item.name); 
 if (item.type === 'file') { 
 fs.writeFileSync(itemPath, item.content || ''); 
 console.log(`File created: ${itemPath}`); 
 } else if (item.type === 'folder') { 
 fs.mkdirSync(itemPath); 
 console.log(`Folder created: ${itemPath}`); 
 createStructure(itemPath, item.children || []); 
 } 
 } 
} 
// Read the JSON file
const jsonFilePath = 'structure.json'; 
const structure = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8')); 
// Specify the base path where the structure will be created
const basePath = './destination'; 
// Create the file/folder structure
createStructure(basePath, structure); 