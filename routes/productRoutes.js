const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');

router.get('/products/search', productController.findProductsByName);
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products', productController.addNewProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.removeProduct);
router.delete('/products', productController.removeAllProducts);

module.exports = router;