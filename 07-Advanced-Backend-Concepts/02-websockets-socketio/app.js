// Topic: WebSockets with Socket.io
// Notes: Real-time bidirectional communication between client and server (used in chat apps, live scoreboards).

const express = require('express');
const http = require('http');
// const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
// const io = new Server(server, { cors: { origin: '*' } });

/*
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Listen for custom event from client
    socket.on('sendMessage', (msg) => {
        console.log('Message received:', msg);
        // Broadcast the message to all connected clients
        io.emit('receiveMessage', msg);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});
*/

// server.listen(3000);
console.log('Check comments for Socket.io implementation');
