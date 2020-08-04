import { User } from "../entities/user";

export interface UsersRepositoryInterface {
    create(user: User): Promise<User>;
    find(): Promise<User[]>;
} 