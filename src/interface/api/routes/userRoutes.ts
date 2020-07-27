import { SetupRouteInterface } from "../protocols/setupRouteInterface";
import { ServerInterface, RequestMethod } from "../protocols/serverInterface";
import { UsersController } from "../controllers/usersControllers";

export class UserSetupRoutes implements SetupRouteInterface {
    setupRoute(server: ServerInterface) {
        const usersController = new UsersController();
        server.addEndpoint(RequestMethod.GET, "/users", async ({ query }) => usersController.getUser(query));
        server.addEndpoint(RequestMethod.POST, "/users", async ({ body }) => usersController.postUser(body));
    }
}