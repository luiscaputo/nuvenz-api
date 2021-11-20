import { Router } from 'express';
import { createUser } from '../middleware/createUser';
import CreateUserController from '../controllers/createUser.controller';

const router = Router();

// controllers
const createUserController = new CreateUserController();

// users routes
router.post('/users', createUser, createUserController.handle);

export default router;
