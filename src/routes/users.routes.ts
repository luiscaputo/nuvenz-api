import { Router } from 'express';
import { createUser } from '../middleware/createUser';
import CreateUserController from '../controllers/createUser.controller';
import LoginUserController from '../controllers/loginUser.controller';

const router = Router();

// controllers
const createUserController = new CreateUserController();
const loginUserController = new LoginUserController();

// users routes
router.post('/users', createUser, createUserController.handle);
router.post('/login', loginUserController.handle);

export default router;
