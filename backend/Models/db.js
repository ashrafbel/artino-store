const mongoose = require("mongoose");

// Retrieve MongoDB connection string from environment variables
const mongo_url = process.env.MONGO_CONN;

// Connect to MongoDB using Mongoose
mongoose.connect(mongo_url)
    .then(() => {
        // If the connection is successful, log a success message
        console.log('MongoDB connected...');
    }).catch((err) => {
        // If the connection fails, log an error message along with the error details
        console.log("MongoDB connection Error: ", err);
    });
