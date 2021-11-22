import { AppResponse } from '@types';
import { Request, Response } from 'express';
import { TweetsComments } from '../models/TweetsComments';
import TweetCommentaryServices, {
  ICommentary,
} from '../service/tweetCommentary/tweetCommentary.service';

export default class CommentaryController {
  async createCommentary(
    request: Request<ICommentary>,
    response: Response<AppResponse<TweetsComments[]>>,
  ) {
    try {
      const { tweetId, userCommentId, commentary } = request.body;
      const tweetCommentaryServices = new TweetCommentaryServices();
      const comment = await tweetCommentaryServices.commentary({
        tweetId,
        commentary,
        userCommentId,
      });
      if (!comment) {
        return response
          .status(400)
          .json({ success: false, message: 'Error. Try Again.' });
      }
      return response.status(200).json({ success: true, message: comment });
    } catch (err) {
      return response
        .status(500)
        .json({ success: false, message: err.message });
    }
  }
}
