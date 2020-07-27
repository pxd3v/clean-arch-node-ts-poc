import { UsersController } from "../controllers/usersControllers";
import { UsersList } from "../../../domain/user/useCases/usersList";
import { UsersRepositoriesMemory } from "../../../infrastructure/persistence/memory/repositories/usersRepositoryMemory";
import { UserCreate } from "../../../domain/user/useCases/userCreate/userCreate";

export class UserContainer {
    static getController(): UsersController {
        const usersRepository = new UsersRepositoriesMemory();
        const userListCase = new UsersList(usersRepository);
        const userCreateCase = new UserCreate(usersRepository);
        return new UsersController(userListCase, userCreateCase);
    }
}