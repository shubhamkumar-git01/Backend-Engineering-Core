// Topic: CRUD Operations (Create, Read, Update, Delete)
// Notes: Standard mapping of HTTP verbs to database actions.

const express = require('express');
const app = express();
app.use(express.json());

let users = [{ id: 1, name: 'Shubham' }];

// Read (GET)
app.get('/users', (req, res) => res.json(users));

// Create (POST)
app.post('/users', (req, res) => {
    const newUser = { id: Date.now(), ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Update (PUT/PATCH)
app.patch('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === id);
    if(index > -1) {
        users[index] = { ...users[index], ...req.body };
        res.json(users[index]);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Delete (DELETE)
app.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.status(204).send(); // 204 No Content
});

// app.listen(3000);
