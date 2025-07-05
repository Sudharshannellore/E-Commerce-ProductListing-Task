const express = require('express')
const cartController = require('../controller/CartController')

const router = express.Router()

router.post('/save', cartController.saveCart);
router.get('/get', cartController.getCart);
router.delete('/delete/:id', cartController.deleteCart);

module.exports = router;

