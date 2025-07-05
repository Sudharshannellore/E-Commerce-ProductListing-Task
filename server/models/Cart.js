const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
      product: {
        _id: String,
        title: String,
        image: String,
        price: Number,
        description: String,
  },
    quantity: Number,
});
module.exports = mongoose.model('Cart', cartSchema);