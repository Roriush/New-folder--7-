import Author from '../models/Author.js';

// Obtener todos los autores
export const getAllAuthors = async (req, res) => {
try {
const authors = await Author.find(); // Obtiene todos los autores de la
base de datos
res.status(200).json(authors);
} catch (error) {
res.status(500).json({ message: 'Error obteniendo autores', error });
}
};
// Obtener un autor por su ID
export const getAuthorById = async (req, res) => {
try {
const author = await Author.findById(req.params.id); // Busca el autor por
ID
if (!author) {
return res.status(404).json({ message: 'Autor no encontrado' });
}
res.status(200).json(author);
} catch (error) {
res.status(500).json({ message: 'Error obteniendo el autor', error });
}
};