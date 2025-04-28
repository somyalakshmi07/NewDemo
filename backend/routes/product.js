const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Get product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching product' });
  }
});

// Get products by category
router.get('/category/:name', async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.name });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching products by category' });
  }
});

// Add a new product (optional, for admin use)
router.post('/add', async (req, res) => {
  const { name, image, price, rating, category } = req.body;

  try {
    const newProduct = new Product({ name, image, price, rating, category });
    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add product' });
  }
});

module.exports = router;
