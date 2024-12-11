import Router from 'express';

import { getAllAuthors, getAuthorById } from '../controllers/authorController.js';
const router = Router();
// Ruta para obtener todos los autores
router.get('/', getAllAuthors);
// Ruta para obtener un autor por su ID
router.get('/:id', getAuthorById);
export default router;
