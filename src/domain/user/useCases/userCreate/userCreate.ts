import { UsersRepositoryInterface } from "../../repositories/models/usersRepositoryInterface";
import { User } from "../../entities/user";
import { UserCreateEntry } from "./userCreateEntry";

export class UserCreate {
  constructor(private readonly userRepository: UsersRepositoryInterface) {}

  execute(userCreateEntry: UserCreateEntry): Promise<User> {
    return this.userRepository.create(userCreateEntry.toModel());
  }
}
