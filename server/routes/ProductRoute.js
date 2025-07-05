const express = require('express')
const productController = require('../controller/ProductController')

const router = express.Router()

router.post('/save', productController.saveProduct);
router.get('/get', productController.getProducts);
router.get('/get/:id', productController.getProductsById);



module.exports = router;

