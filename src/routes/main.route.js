import {Router} from 'express';
import {getProyectos} from '../controllers/proyecto.controller.js';

const router = new Router();

router.get('/', getProyectos);

export default router;