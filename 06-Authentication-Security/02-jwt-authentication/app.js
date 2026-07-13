// Topic: JSON Web Tokens (JWT)
// Notes: Stateless authentication. The server signs the token, the client stores it and sends it with requests.

const jwt = require('jsonwebtoken');
const SECRET_KEY = 'super-secret-key-change-this-in-production';

// Generate Token
const signToken = (id) => {
    return jwt.sign({ id }, SECRET_KEY, {
        expiresIn: '90d'
    });
};

// Verify Token (Middleware example)
const protect = (req, res, next) => {
    let token = req.headers.authorization;
    
    if (token && token.startsWith('Bearer')) {
        token = token.split(' ')[1];
        try {
            const decoded = jwt.verify(token, SECRET_KEY);
            req.user = decoded; // Attach user to request
            next();
        } catch (err) {
            res.status(401).json({ message: 'Invalid or expired token' });
        }
    } else {
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};
