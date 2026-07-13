// Topic: Referencing vs Embedding
// Notes:
// Embedding: Put data directly inside the document (good for small, related data, like reviews on a product).
// Referencing: Store ObjectId and use `.populate()` (good for large, unbound data, like posts belonging to a user).

const mongoose = require('mongoose');

// Referencing Example
const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'User' // Points to the User model
    }
});

/*
// When querying:
const posts = await Post.find().populate('author', 'name email'); 
// replaces the author ID with the actual user document (only name & email)
*/
