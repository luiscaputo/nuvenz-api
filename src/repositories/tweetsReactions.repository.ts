import { TweetsReactions } from '../models/TweetsReactions';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(TweetsReactions)
export default class TweetsReactionsRepository extends Repository<TweetsReactions> {}
