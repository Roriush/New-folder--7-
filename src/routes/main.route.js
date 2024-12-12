import {Router} from 'express';
import {getProyectos} from '../controllers/proyecto.controller.js';
import data from '../database/data.js';

const router = new Router();

router.get('/', getProyectos);

export default router;