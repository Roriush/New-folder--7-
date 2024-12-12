import {Router} from 'express';
import { getProyectos, deleteProyecto, getProyectoById, getProyectos, updateProyecto } from '../controllers/proyecto.controller.js';


const router = new Router();

router.get('/', getProyectos);
router.post('/', createProyectos);
router.get('/id', getHomeById);
router.put('/:id', updateProyecto)
router.delete('/:id', deleteProyecto)


export default router