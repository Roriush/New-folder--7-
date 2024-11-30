import {Router} from 'express';
import {createUser, getUser, updateUser, deleteUser} from '../controllers/user.controller';
import { validateUser } from '../middleware/validateUser';

const Router = express.Router();
const userRoutes = Router;

router get ('/', getHome);

export default userRoutes;