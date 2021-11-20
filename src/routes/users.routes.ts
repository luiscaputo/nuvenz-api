import { Router } from 'express';
import { createUser, login } from '../middleware/auth';
import CreateUserController from '../controllers/createUser.controller';
import LoginUserController from '../controllers/loginUser.controller';

const router = Router();

// controllers
const createUserController = new CreateUserController();
const loginUserController = new LoginUserController();

// users routes
router.post('/users', createUser, createUserController.handle);
router.post('/login', login, loginUserController.handle);

export default router;
