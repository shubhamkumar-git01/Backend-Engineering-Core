// Topic: HttpOnly Cookies
// Notes: Storing JWTs in localStorage is vulnerable to XSS. HttpOnly cookies are much more secure.

const express = require('express');
// const cookieParser = require('cookie-parser');
const app = express();
// app.use(cookieParser());

app.post('/login', (req, res) => {
    const token = 'fake-jwt-token';
    
    // Send cookie
    res.cookie('jwt', token, {
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        httpOnly: true, // Cannot be accessed or modified by the browser JS!
        secure: process.env.NODE_ENV === 'production' // Only send on HTTPS
    });

    res.status(200).json({ status: 'success', message: 'Logged in securely' });
});
