import { UsersRepositoryInterface } from "../repositories/usersRepositoryInterface";
import { User } from "../entities/user";

export class UsersList {
  constructor(private readonly userRepository: UsersRepositoryInterface) {};

  execute(): Promise<User[]> {
    return this.userRepository.find();
  }
}
