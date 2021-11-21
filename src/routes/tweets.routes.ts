import TweetsController from '../controllers/tweets.controller';
import { Router } from 'express';

const router = Router();

// controller
const tweetsControllers = new TweetsController();

router.post('/tweet', tweetsControllers.CreateTweet);
router.post('/tweet/like', tweetsControllers.LikeTweet);
router.get('/tweets', tweetsControllers.TweetsFeed);
router.delete('/tweet/:id', tweetsControllers.RemoveTweet);

export default router;
