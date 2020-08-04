import { UsersRepositoryInterface } from "../models/usersRepositoryInterface";
import { User } from "../../entities/user";

export class FakeUsersRepository implements UsersRepositoryInterface {
    private users: User[];
    private increment: number;

    constructor() {
        this.users = [];
        this.increment = 0;
    }

    async create(user: User): Promise<User> {
        user.id = ++this.increment;
        this.users.push(user);
        return Promise.resolve(user);
    }

    async find(): Promise<User[]> {
        return Promise.resolve(this.users);
    }
}