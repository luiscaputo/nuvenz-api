import { Retweets } from '../models/Retweets';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Retweets)
export default class RetweetsRepository extends Repository<Retweets> {}
