import { Users } from '../models/Users';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Users)
export default class UsersRepository extends Repository<Users> {}
