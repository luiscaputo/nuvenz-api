import { TweetsComments } from '../models/TweetsComments';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(TweetsComments)
export default class TweetsCommentsRepository extends Repository<TweetsComments> {}
