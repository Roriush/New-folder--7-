import {Router} from 'express';
import {getProyectos} from '../controllers/user.controller';

const Router = express.Router();
const userRoutes = Router;

router get ('/', getHome);
router.post('/', getProyectos);
router get ('/id', getHome);

export default userRoutes;