// handler.js (serverless function)
const { createServer, proxy } = require('vercel-micro');

const server = require('./App'); // Import your JSON server code

module.exports = createServer((req, res) => {
  // Pass the request and response objects to your JSON server
  server(req, res);
});
