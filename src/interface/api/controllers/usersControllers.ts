import { RequestResponse } from "../protocols/serverInterface";
import { UsersList } from "../../../domain/user/useCases/usersList";
import { UserCreate } from "../../../domain/user/useCases/userCreate/userCreate";
import { UserCreateEntry } from "../../../domain/user/useCases/userCreate/userCreateEntry";

export class UsersController {
    constructor(private readonly usersList: UsersList, private readonly userCreate: UserCreate) {};

    async getUser(): Promise<RequestResponse> {
        const usersList = await this.usersList.execute();

        return {
            statusCode: 200,
            data: usersList
        };
    }

    async postUser(body: any): Promise<RequestResponse> {
        const newUser = await this.userCreate.execute(new UserCreateEntry(body.name, body.email));
        return {
            statusCode: 201,
            data: newUser
        };
    }
}