import RetweetController from '../controllers/retweet.controller';
import { Router } from 'express';
import CommentaryController from '../controllers/tweetCommentary.controller';

const router = Router();

// controller
const commentaryController = new CommentaryController();

router.post('/commentary', commentaryController.createCommentary);

export default router;
