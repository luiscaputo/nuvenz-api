import { getCustomRepository } from 'typeorm';
import UsersRepository from '../repositories/users.repository';
import { AppResponse } from '@types';
import { Request, Response } from 'express';
import { Tweets } from '../models/Tweets';
import TweetsServices, {
  ITweet,
  ITweetLike,
} from '../service/tweets/tweets.service';
import TweetsRepository from '../repositories/tweets.repository';

export default class TweetsController {
  async CreateTweet(
    request: Request<ITweet>,
    response: Response<AppResponse<Tweets[]>>,
  ) {
    try {
      const { tweet, userId } = request.body;
      const usersRepository = getCustomRepository(UsersRepository);
      const verifyUser = await usersRepository.findOne(userId);
      if (!verifyUser) {
        return response
          .status(400)
          .json({ success: false, message: 'Usuário Inexistente.' });
      }
      const tweetsServices = new TweetsServices();
      const newTweet = await tweetsServices.createTweet({ tweet, userId });
      if (newTweet) {
        return response.status(200).json({ success: true, message: newTweet });
      }
      return response
        .status(400)
        .json({ success: false, message: 'Error! Try Again.' });
    } catch (err) {
      return response
        .status(500)
        .json({ success: false, message: err.message });
    }
  }
  async TweetsFeed(
    request: Request<any>,
    response: Response<AppResponse<Tweets[]>>,
  ) {
    try {
      const tweetsServices = new TweetsServices();
      return response
        .status(200)
        .json({ success: true, data: await tweetsServices.tweetsFeed() });
    } catch (err) {
      return response
        .status(500)
        .json({ success: false, message: err.message });
    }
  }
  async RemoveTweet(
    request: Request<number>,
    response: Response<AppResponse<string>>,
  ) {
    try {
      const id = request.params;
      const tweetsServices = new TweetsServices();
      const tweetsRepository = getCustomRepository(TweetsRepository);
      const verifyTweet = await tweetsRepository.findOne(id);
      if (!verifyTweet) {
        return response
          .status(400)
          .json({ success: false, message: 'Tweet Inexistente.' });
      }
      const removeTweet = await tweetsServices.removeTweet(id);
      return response.status(200).json({ success: true, message: removeTweet });
    } catch (err) {
      return response
        .status(500)
        .json({ success: false, message: err.message });
    }
  }
  async LikeTweet(
    request: Request<ITweetLike>,
    response: Response<AppResponse<string>>,
  ) {
    try {
      const { tweetId, userId } = request.body;
      const tweetsSevices = new TweetsServices();
      const likeTweet = await tweetsSevices.likeTweet({ tweetId, userId });
      return response.status(200).json({ success: true, message: likeTweet });
    } catch (err) {
      return response
        .status(500)
        .json({ success: false, message: err.message });
    }
  }
  async UnLikeTweet(
    request: Request<ITweetLike>,
    response: Response<AppResponse<string>>,
  ) {
    try {
      const { tweetId, userId } = request.body;
      const tweetsSevices = new TweetsServices();
      const UnlikeTweet = await tweetsSevices.unlikeTweet({ tweetId, userId });
      return response.status(200).json({ success: true, message: UnlikeTweet });
    } catch (err) {
      return response
        .status(500)
        .json({ success: false, message: err.message });
    }
  }
}
