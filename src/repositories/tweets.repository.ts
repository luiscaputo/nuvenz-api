import { Tweets } from 'models/Tweets';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Tweets)
export default class TweetsRepository extends Repository<Tweets> {}
