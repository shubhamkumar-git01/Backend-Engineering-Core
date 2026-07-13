// Topic: Vanilla HTTP Server
// Notes: Building a server without Express to understand how it works under the hood.

const http = require('http');

const server = http.createServer((req, res) => {
    // Basic Routing
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Home Page</h1>');
    } else if (req.url === '/api/data') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ user: 'Shubham', role: 'Dev' }));
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => console.log(Vanilla Node Server running on port $PORT));
