import Book from '../models/Book.js';
// Obtener todos los libros
export const getAllBooks = async (req, res) => {
try {
const books = await Book.find().populate('author'); // Obtiene todos los libros y los autores asociados
res.status(200).json(books);
} catch (error) {
res.status(500).json({ message: 'Error obteniendo libros', error });
}
};
// Obtener un libro por su ID
export const getBookById = async (req, res) => {
try {
const book = await Book.findById(req.params.id).populate('author'); //Busca el libro por ID y trae el autor relacionado
if (!book) {
return res.status(404).json({ message: 'Libro no encontrado' });
}
res.status(200).json(book);
} catch (error) {
res.status(500).json({ message: 'Error obteniendo el libro', error });
}
};

export const getBook = async (req, res) => {
try {
    const books = await Book.find().populate('author', ['name', 'age', '-_id']);
    res.status(200).json(books);
    } catch (error) {
    res.status(500).json({ error: error });
    }
    }