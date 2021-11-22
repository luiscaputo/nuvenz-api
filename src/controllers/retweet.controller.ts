import { AppResponse } from '@types';
import { Request, Response } from 'express';
import { Retweets } from '../models/Retweets';
import RetweetServices, {
  IRetweet,
} from '../service/reetweets/reetweet.service';

export default class RetweetController {
  async createRetweet(
    request: Request,
    response: Response<AppResponse<Retweets[]>>,
  ) {
    try {
      const { tweetId, userRetweetId } = request.body;
      const retweetServices = new RetweetServices();
      const reetweet = await retweetServices.retweet({
        tweetId,
        userRetweetId,
      });
      if (!reetweet) {
        return response
          .status(400)
          .json({ success: false, message: 'Error. Try Again.' });
      }
      return response.status(200).json({ success: true, message: reetweet });
    } catch (err) {
      return response
        .status(500)
        .json({ success: false, message: err.message });
    }
  }
}
