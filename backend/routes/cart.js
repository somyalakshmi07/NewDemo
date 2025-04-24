const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const User = require('../models/User');

// Add to cart
router.post('/add', auth, async (req, res) => {
  const user = await User.findById(req.user._id);
  const { productId } = req.body;

  const existing = user.cart.find(item => item.productId === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    user.cart.push({ productId, quantity: 1 });
  }

  await user.save();
  res.send('Added to cart');
});

// Get cart items
router.get('/', auth, async (req, res) => {
  const user = await User.findById(req.user._id);
  res.json(user.cart);
});

// Save for later
router.post('/save', auth, async (req, res) => {
  const { productId } = req.body;
  const user = await User.findById(req.user._id);
  if (!user.savedItems.includes(productId)) {
    user.savedItems.push(productId);
  }
  await user.save();
  res.send('Saved for later');
});

module.exports = router;
