const Book = require('../models/Book');

// Obtener todos los libros
async function getAllBooks(req, res) {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los libros.' });
  }
}

// Obtener un libro por ID
async function getBookById(req, res) {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ error: 'Libro no encontrado.' });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el libro.' });
  }
}

// Crear un nuevo libro
async function createBook(req, res) {
  const { nombre, autor, año, estado } = req.body;
  try {
    const book = new Book({ nombre, autor, año, estado });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el libro.' });
  }
}

// Actualizar un libro por ID
async function updateBook(req, res) {
  const { id } = req.params;
  const { nombre, autor, año, estado } = req.body;
  try {
    const book = await Book.findByIdAndUpdate(id, { nombre, autor, año, estado }, { new: true });
    if (!book) {
      return res.status(404).json({ error: 'Libro no encontrado.' });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el libro.' });
  }
}

// Eliminar un libro por ID
async function deleteBook(req, res) {
  const { id } = req.params;
  try {
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).json({ error: 'Libro no encontrado.' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el libro.' });
  }
}

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
