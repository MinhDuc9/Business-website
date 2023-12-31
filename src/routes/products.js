const express = require('express');
const router = express.Router();

const productController = require('../app/controllers/ProductController')

// productController.index

router.get('/create', productController.create);
router.post('/store', productController.store);
router.get('/:id/edit', productController.edit);
router.post('/handle-form-action', productController.handleFormAction);
router.post('/recycleBin-form-action', productController.deleteFormAction);
router.put('/:id', productController.update);
router.patch('/:id/restore', productController.restore);
router.delete('/:id', productController.delete);
router.delete('/:id/force', productController.forceDelete);
router.get('/:slug', productController.show);

module.exports = router;