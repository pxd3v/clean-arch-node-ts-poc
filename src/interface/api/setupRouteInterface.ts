import { ServerInterface } from "./serverInterface";

export interface SetupRouteInterface {
    setupRoute(server: ServerInterface): void;
}