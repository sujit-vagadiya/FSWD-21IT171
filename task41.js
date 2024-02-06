const readline = require('readline');
const url = require('url');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt user for URL input
rl.question('Enter a URL: ', (inputUrl) => {
  const parsedUrl = url.parse(inputUrl, true);
  console.log('Protocol:', parsedUrl.protocol);
  console.log('Host:', parsedUrl.host);
  console.log('Path:', parsedUrl.pathname);
  console.log('Query Parameters:', parsedUrl.query);
  rl.close();
});

//url http://localhost:3000/default.htm?name=sujit%age=20