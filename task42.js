const url = require('url');

function resolveUrl(baseUrl, relativePath) {
  
  const parsedBaseUrl = new URL(baseUrl);
  const resolvedUrl = new URL(relativePath, parsedBaseUrl);
  return resolvedUrl.href;
}

const baseUrl = 'https://example.com';
const relativePath = '/path/to/resource';

const absoluteUrl = resolveUrl(baseUrl, relativePath);
console.log('Absolute URL:', absoluteUrl);
