const http = require('http'); 
// Create a server
const server = http.createServer((req, res) => { 
 // Set the response headers
 res.setHeader('Content-Type', 'text/plain'); 
 // Handle different HTTP methods
 if (req.method === 'GET') { 
 res.statusCode = 200; 
 res.end('Hello, World!'); 
 } else if (req.method === 'POST') { 
 res.statusCode = 201; 
 res.end('POST request received!'); 
 } else if (req.method === 'PUT') { 
 res.statusCode = 200; 
 res.end('PUT request received!'); 
 } else if (req.method === 'DELETE') { 
 res.statusCode = 200; 
 res.end('DELETE request received!'); 
 } 
else { 
 res.statusCode = 404;
 res.end('Not found'); 
 } 
}); 
// Start the server
server.listen(3000, () => { 
 console.log('Server is listening on port 3000'); 
}); 