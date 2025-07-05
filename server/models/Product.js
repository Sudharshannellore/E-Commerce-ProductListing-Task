const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: String,
    image: String,
    price: Number,
    description: String,
});
module.exports = mongoose.model('Product', productSchema);