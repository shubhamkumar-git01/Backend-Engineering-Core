// Topic: Pagination, Filtering, and Sorting
// Notes: Essential for endpoints that return arrays of data.

const express = require('express');
const app = express();

app.get('/api/products', (req, res) => {
    // 1. Filtering
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach(el => delete queryObj[el]);

    // 2. Sorting
    let sortBy = req.query.sort ? req.query.sort.split(',').join(' ') : '-createdAt';

    // 3. Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Simulate DB query
    // const products = await Product.find(queryObj).sort(sortBy).skip(skip).limit(limit);

    res.json({
        status: 'success',
        results: 0, // products.length
        data: {
            // products
            message: "Check comments for full implementation logic"
        }
    });
});
