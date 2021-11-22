import RetweetsRepository from '../../repositories/retweets.repository';
import TweetsRepository from '../../repositories/tweets.repository';
import { getCustomRepository } from 'typeorm';

export interface IRetweet {
  tweetId: number;
  userRetweetId: number;
}

export default class RetweetServices {
  async retweet({ tweetId, userRetweetId }: IRetweet) {
    try {
      const tweetRepository = getCustomRepository(TweetsRepository);
      const retweetRepository = getCustomRepository(RetweetsRepository);

      const verifyTweetExists = await tweetRepository.findOne({
        where: { id: tweetId },
      });
      if (!verifyTweetExists) {
        return 'Tweet Inexistente/Removido.';
      }
      const retweet = retweetRepository.create({
        tweetRetweetedId: tweetId,
        totalLikes: 0,
        totalUnlike: 0,
        userTweetId: userRetweetId,
        status: 'Ative',
      });
      await retweetRepository.save(retweet);
      return retweet;
    } catch (err) {
      return err.message;
    }
  }
}
