import { SetupRouteInterface } from "../setupRouteInterface";
import { ServerInterface } from "../serverInterface";
import { UsersController } from "../controllers/usersControllers";

export class UserSetupRoutes implements SetupRouteInterface {
    setupRoute(server: ServerInterface) {
        const usersController = new UsersController();
        server.addGet("/users", async ({ query }) => usersController.getUser(query));
        server.addPost("/users", async ({ body }) => usersController.postUser(body));
    }
}