const express = require('express');
const router = express.Router();
const BookController = require('../controllers/BookController');

// Rutas para libros
router.get('/', BookController.getAllBooks);
router.get('/:id', BookController.getBookById);
router.post('/', BookController.createBook);
router.put('/:id', BookController.updateBook);
router.delete('/:id', BookController.deleteBook);

module.exports = router;
