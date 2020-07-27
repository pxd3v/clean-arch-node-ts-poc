import { User } from "../../entities/user";

export class UserCreateEntry {
    constructor(public readonly name: string, public readonly email: string) {}

    toModel(): User {
        return new User(this.name, this.email);
    }
}