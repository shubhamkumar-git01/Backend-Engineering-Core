// Topic: Connecting to MongoDB (NoSQL)
// Notes: MongoDB is document-based. We store BSON (JSON-like) objects, not rows/columns.

const mongoose = require('mongoose');

// require('dotenv').config();
const DB_URI = 'mongodb://localhost:27017/myDatabase'; // Example local URI

/*
mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('DB Connection Successful!');
}).catch(err => {
    console.log('DB Connection Error:', err);
});
*/
console.log("Check comments for MongoDB connection snippet.");
