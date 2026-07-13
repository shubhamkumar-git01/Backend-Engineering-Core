// Topic: Req and Res objects
const express = require('express');
const app = express();

// URL Parameters (Dynamic params)
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(User ID requested: $userId`);
});

// Query Parameters (e.g. /search?keyword=node&sort=asc)
app.get('/search', (req, res) => {
    const { keyword, sort } = req.query;
    res.json({ searchingFor: keyword, sortedBy: sort });
});

// app.listen(3000);
