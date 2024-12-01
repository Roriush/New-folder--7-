import {Router} from 'express';
import {getProyectos} from '../controllers/proyecto.controller.js';

const Router = express.Router();
const userRoutes = Router;

router get ('/', getHome);

export default Routes;