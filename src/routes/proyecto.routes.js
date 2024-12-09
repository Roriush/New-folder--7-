import {Router} from 'express';
import { getProyectos } from '../controllers/proyecto.controller.js';


const router = new Router();

router.get('/', getProyectos);
// router.post('/', createProyectos);
// router.get('/id', getHomeById);

export default router;