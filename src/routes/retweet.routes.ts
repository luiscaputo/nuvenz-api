import RetweetController from '../controllers/retweet.controller';
import { Router } from 'express';

const router = Router();

// controller
const retweetsControllers = new RetweetController();

router.post('/retweet', retweetsControllers.createRetweet);

export default router;
