const express = require('express');
const fs = require('fs'); // لقراءة الملفات
const path = require('path');
const router = express.Router();

// وظيفة لقراءة البيانات من `product.json`
const readProducts = () => {
  const dataPath = path.join(__dirname, '../data/products.json');
  const rawData = fs.readFileSync(dataPath); // قراءة البيانات من الملف
  return JSON.parse(rawData); // تحويل النص إلى JSON
};

// عرض جميع المنتجات
router.get('/products', (req, res) => {
  const products = readProducts(); // جلب المنتجات
  res.json(products); // إرسالها كـ JSON للمستخدم
});

module.exports = router;
