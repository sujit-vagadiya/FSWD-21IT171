const http = require('http'); 
// Create a server
const server = http.createServer((req, res) => { 
 // Handling GET requests
 if (req.method === 'GET' && req.url === '/') { 
 res.statusCode = 200; 
 res.setHeader('Content-Type', 'text/plain'); 
 res.end('Received a GET request'); 
 } 
 else if (req.method === 'POST' && req.url === '/') { 
 res.statusCode = 201; 
 res.setHeader('Content-Type', 'text/plain'); 
 res.end('Received a POST request'); 
 } 
 else if (req.method === 'PUT' && req.url === '/') { 
 res.statusCode = 200; 
 res.setHeader('Content-Type', 'text/plain'); 
 res.end('Received a PUT request'); 
 } 
else if (req.method === 'DELETE' && req.url === '/') { 
 res.statusCode = 204; 
 res.end(); 
 } 
 // Handling requests with different content types
 else if (req.method === 'POST' && req.url === '/json') { 
 let data = ''; 
 req.on('data', (chunk) => { 
 data += chunk; 
 }); 
 req.on('end', () => { 
 console.log(JSON.parse(data)); 
 res.statusCode = 200; 
 res.end(); 
 }); 
 } 
 // Handling a custom status code
 else if (req.method === 'GET' && req.url === '/notfound') { 
    res.statusCode = 404; 
    res.setHeader('Content-Type', 'text/plain'); 
    res.end('Not Found'); 
    } 
    // Handling a server error
    else if (req.method === 'GET' && req.url === '/error') { 
    res.statusCode = 500; 
    res.setHeader('Content-Type', 'text/plain'); 
    res.end('Internal Server Error'); 
    } 
    // Handling other requests
    else { 
    res.statusCode = 404; 
    res.setHeader('Content-Type', 'text/plain'); 
    res.end('Not Found'); 
    } 
   }); 
   // Start the server
   const port = 3000; 
   server.listen(port, () => { 
    console.log(`Server running at http://localhost:${port}/`); 
   }); 
   