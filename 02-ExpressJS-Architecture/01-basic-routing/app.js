// Topic: Express Basic Routing
// Notes: Express simplifies HTTP server creation massively.

const express = require('express');
const app = express();

// GET Request
app.get('/', (req, res) => {
    res.send('Welcome to the Express API!');
});

// POST Request (Remember to use express.json() middleware to parse body)
app.use(express.json());
app.post('/api/users', (req, res) => {
    const newUser = req.body;
    res.status(201).json({ message: 'User created', data: newUser });
});

// app.listen(3000, () => console.log('Server started'));
