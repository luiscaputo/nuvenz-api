import TweetsRepository from '../../repositories/tweets.repository';
import { getCustomRepository } from 'typeorm';
import TweetsCommentsRepository from '../../repositories/tweetsComments.repository';

export interface ICommentary {
  tweetId: number;
  userCommentId: number;
  commentary: string;
}

export default class TweetCommentaryServices {
  async commentary({ tweetId, userCommentId, commentary }: ICommentary) {
    try {
      const tweetRepository = getCustomRepository(TweetsRepository);
      const commentaryRepository = getCustomRepository(
        TweetsCommentsRepository,
      );

      const verifyTweetExists = await tweetRepository.findOne({
        where: { id: tweetId },
      });
      if (!verifyTweetExists) {
        return 'Tweet Inexistente/Removido.';
      }
      const comment = commentaryRepository.create({
        tweetId,
        totalLike: 0,
        totalUnlike: 0,
        commentary,
        userCommentId: userCommentId,
        status: 'Ative',
      });
      await commentaryRepository.save(comment);
      return comment;
    } catch (err) {
      return err.message;
    }
  }
}
