const http = require("node:http");

const HOST = "0.0.0.0";
const PORT = 3000;

// Create a basic HTTP server for the assignment.
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
  });

  // Return a simple page confirming that the server is running.
  res.end(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>DevOps Module 1</title>
</head>
<body>
  <h1>DevOps Module 1 Assignment</h1>
  <p>Status: Application is running successfully.</p>
  <p>Server: Node.js HTTP Server</p>
  <p>Port: ${PORT}</p>
</body>
</html>`);
});

// Listen on port 3000 for local testing and the ngrok tunnel.
server.listen(PORT, HOST, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
