const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  price: String,
  image: String,
  description: String,
  image1: String,
  image2: String,
  image3: String
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
