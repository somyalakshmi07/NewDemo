const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  cart: [{
    productId: String,
    quantity: Number
  }],
  savedItems: [String]
});

module.exports = mongoose.model('User', UserSchema);
