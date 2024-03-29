import TweetsRepository from '../../repositories/tweets.repository';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../../repositories/users.repository';
import TweetsReactionsRepository from '../../repositories/tweetsReactions.repository';
import { Tweets } from '../../models/Tweets';
import { TweetsReactions } from '../../models/TweetsReactions';

export interface ITweet {
  tweet: string;
  userId: number;
  tweetId?: number;
}
export interface ITweetLike {
  userId: number;
  tweetId: number;
}

export default class TweetsServices {
  async createTweet({ tweet, userId }: ITweet) {
    try {
      const tweetRepository = getCustomRepository(TweetsRepository);
      const createTweet = tweetRepository.create({
        tweet,
        userTweetId: userId,
        totalLike: 0,
        totalUnlike: 0,
        status: 'Ative',
      });
      await tweetRepository.save(createTweet);
      return createTweet;
    } catch (err) {
      return err.message;
    }
  }
  async removeTweet(id: number) {
    try {
      const tweetRepository = getCustomRepository(TweetsRepository);

      const verifyTweet = await tweetRepository.findOne(id);

      if (!verifyTweet) {
        return new Error('Esse Tweet não existe');
      }

      await tweetRepository.delete(id);

      return 'Tweet Removido.';
    } catch (err) {
      return err.message;
    }
  }
  async likeTweet({ tweetId, userId }: ITweetLike) {
    try {
      const tweetReactionsRepository = getCustomRepository(
        TweetsReactionsRepository,
      );
      const tweetRepository = getCustomRepository(TweetsRepository);
      const usersRepository = getCustomRepository(UsersRepository);

      const isUserReacted = await tweetReactionsRepository.findOne({
        where: { userReactedId: userId },
      });

      if (isUserReacted) {
        if (tweetId == isUserReacted.tweetId) {
          if (isUserReacted.reactionTypeId == 1) {
            return 'Já Gosta Desse Tweet.';
          }
        }
      }
      // Creating like
      const totallike = await tweetRepository
        .createQueryBuilder('tweets')
        .select('Max(tweets.totallike)', 'max')
        .getRawOne();
      const newTotal = parseInt(totallike['max']) + 1;
      await tweetRepository
        .createQueryBuilder()
        .update(Tweets)
        .set({
          totalLike: newTotal,
        })
        .where({
          id: tweetId,
        })
        .execute();
      await tweetReactionsRepository
        .createQueryBuilder()
        .createQueryBuilder()
        .insert()
        .into(TweetsReactions)
        .values({
          userReactedId: userId,
          tweetId,
          status: 'Active',
        })
        .execute();
      return 'Gosto.';
    } catch (err) {
      return err.message;
    }
  }
  async unlikeTweet({ tweetId, userId }: ITweetLike) {
    try {
      const tweetReactionsRepository = getCustomRepository(
        TweetsReactionsRepository,
      );
      const tweetRepository = getCustomRepository(TweetsRepository);

      const isUserReacted = await tweetReactionsRepository.findOne({
        where: { userReactedId: userId },
      });

      if (isUserReacted) {
        if (tweetId == isUserReacted.tweetId) {
          if (isUserReacted.reactionTypeId == 2) {
            return 'Já Não Está Gostando Desse Tweet.';
          }
        }
      }
      // Creating like
      const totalUnlike = await tweetRepository
        .createQueryBuilder('tweets')
        .select('Max(tweets.totalUnlike)', 'max')
        .getRawOne();

      const newTotal = parseInt(totalUnlike['max']) + 1;
      await tweetRepository
        .createQueryBuilder()
        .update(Tweets)
        .set({
          totalUnlike: newTotal,
        })
        .where({
          id: tweetId,
        })
        .execute();
      await tweetReactionsRepository
        .createQueryBuilder()
        .createQueryBuilder()
        .insert()
        .into(TweetsReactions)
        .values({
          userReactedId: userId,
          tweetId,
          status: 'Active',
        })
        .execute();
      return 'Não Gosto.';
    } catch (err) {
      return err.message;
    }
  }
  async tweetsFeed() {
    try {
      const tweetsRepository = getCustomRepository(TweetsRepository);
      const getAllTweets = await tweetsRepository.find();
      if (getAllTweets.length > 0) {
        return getAllTweets;
      }
      return 'Nenhum Tweet Encontrado.';
    } catch (err) {
      return err.message;
    }
  }
}
