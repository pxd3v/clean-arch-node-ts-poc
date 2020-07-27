import { SetupRouteInterface } from "../protocols/setupRouteInterface";
import { ServerInterface, RequestMethod } from "../protocols/serverInterface";
import { UserContainer } from "../container/userContainer";

export class UserSetupRoutes implements SetupRouteInterface {
    setupRoute(server: ServerInterface) {
        const usersController = UserContainer.getController();
        server.addEndpoint(RequestMethod.GET, "/users", async () => usersController.getUser());
        server.addEndpoint(RequestMethod.POST, "/users", async ({ body }) => usersController.postUser(body));
    }
}