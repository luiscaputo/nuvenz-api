import { EntityRepository, Repository } from 'typeorm';
import { ReactionsType } from '../models/ReactionsType';

@EntityRepository(ReactionsType)
export default class ReactionsTypeRepository extends Repository<ReactionsType> {}
