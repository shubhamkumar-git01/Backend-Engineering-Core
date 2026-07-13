// Topic: Aggregation Pipeline
// Notes: MongoDB's powerful tool for processing data records and returning computed results.

// const Order = require('./orderModel');

/*
const getSalesStats = async () => {
    const stats = await Order.aggregate([
        {
            $match: { status: 'completed' } // 1. Filter
        },
        {
            $group: { // 2. Group and calculate
                _id: '$productType', 
                totalSales: { $sum: '$price' },
                avgPrice: { $avg: '$price' },
                numOrders: { $sum: 1 }
            }
        },
        {
            $sort: { totalSales: -1 } // 3. Sort by highest sales
        }
    ]);
    return stats;
}
*/
console.log("Check comments for Aggregation Pipeline example");
