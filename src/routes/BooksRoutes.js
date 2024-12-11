import express from 'express';

import { getAllBooks, getBookById } from '../controllers/bookController.js';
const router = express.Router();
// Ruta para obtener todos los libros
router.get('/', getAllBooks);
// Ruta para obtener un libro por su ID
router.get('/:id', getBookById);
export default router;