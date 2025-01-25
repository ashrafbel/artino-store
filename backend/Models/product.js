const mongoose = require('mongoose');

// Define the schema for a product

const productSchema = new mongoose.Schema({
  title: String,
  price: String,
  image: String,
  description: String,
  image1: String,
  image2: String,
  image3: String
});

// Create a Mongoose model for the 'Product' collection using the defined schema

const Product = mongoose.model('Product', productSchema);

// Export the Product model so it can be used in other parts of the application
module.exports = Product;
