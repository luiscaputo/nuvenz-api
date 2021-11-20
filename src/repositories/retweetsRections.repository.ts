import { RetweetsReactions } from 'models/RetweetsReactions';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(RetweetsReactions)
export default class RetweetsReactionsRepository extends Repository<RetweetsReactions> {}
