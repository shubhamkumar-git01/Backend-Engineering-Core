// Topic: MVC Pattern (Model-View-Controller)
// Notes: We separate concerns. Routes point to Controllers. Controllers interact with Models.

/*
// Folder Structure:
// - /routes/userRoutes.js
// - /controllers/userController.js
// - /models/userModel.js

// userRoutes.js
const express = require('express');
const { getAllUsers } = require('../controllers/userController');
const router = express.Router();
router.get('/', getAllUsers);
module.exports = router;

// userController.js
exports.getAllUsers = (req, res) => {
    res.status(200).json({ status: 'success', data: [] });
};
*/
console.log("Check comments for MVC structure");
