import TweetsRepository from '../../repositories/tweets.repository';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../../repositories/users.repository';
import TweetsReactionsRepository from '../../repositories/tweetsReactions.repository';
import { userLoggedId } from '../../service/getIdUserLogged.service';
import { Tweets } from 'models/Tweets';

export interface ITweet {
  tweetId: number;
}

export default class TweetsServices {
  async createTweet(tweet: string) {
    try {
      const tweetRepository = getCustomRepository(TweetsRepository);
      const createTweet = await tweetRepository
        .createQueryBuilder()
        .insert()
        .into(Tweets)
        .values({
          tweet,
          userTweetId: userLoggedId,
          status: 'Active',
        })
        .execute();
      return createTweet;
    } catch (err) {
      return err.message;
    }
  }
  async removeTweet({ tweetId }: ITweet) {
    try {
      const tweetRepository = getCustomRepository(TweetsRepository);
      const verifyTweet = await tweetRepository.findOne({
        where: { id: tweetId },
      });

      if (!verifyTweet) {
        return new Error('Esse Tweet não existe');
      }

      await tweetRepository
        .createQueryBuilder()
        .update(Tweets)
        .set({
          status: 'Removed',
        })
        .where('id = :tweetId', { id: tweetId })
        .execute();

      return 'Tweet Removido.';
    } catch (err) {
      return err.message;
    }
  }
  async likeTweet({ tweetId }: ITweet) {
    try {
      const tweetReactionsRepository = getCustomRepository(
        TweetsReactionsRepository,
      );
      const verifyExistReaction = await tweetReactionsRepository.findOne({
        where: { userReactedId: userLoggedId },
      });
    } catch (err) {
      return err.message;
    }
  }
  async unlikeTweet() {}
  async tweetsFeed() {}
}
