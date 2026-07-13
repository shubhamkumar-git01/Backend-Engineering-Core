// Topic: Redis Caching
// Notes: Storing frequently accessed data in an in-memory database to reduce load on the main DB.

// const redis = require('redis');
// const client = redis.createClient();

/*
app.get('/api/photos', async (req, res) => {
    // 1. Check if data is in Redis cache
    const photos = await client.get('photos');

    if (photos) {
        return res.json({ source: 'cache', data: JSON.parse(photos) });
    } else {
        // 2. If not, fetch from Main DB (e.g., MongoDB / External API)
        const dbPhotos = await fetchPhotosFromDB();
        
        // 3. Save to cache for next time (expires in 3600 seconds)
        client.setEx('photos', 3600, JSON.stringify(dbPhotos));
        
        res.json({ source: 'database', data: dbPhotos });
    }
});
*/
console.log('Check comments for Redis Caching pattern');
