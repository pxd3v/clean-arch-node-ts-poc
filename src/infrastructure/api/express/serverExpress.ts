import express, { Request } from "express";
import bodyParser from "body-parser";
import {
  ServerInterface,
  RequestHandler,
  RequestMethod,
  HandlerEntry,
} from "../../../interface/api/protocols/serverInterface";

export class ServerExpress implements ServerInterface {
  private expressServer: express.Express;
  
  constructor() {
    this.expressServer = express();
    this.expressServer.use(bodyParser.json());
  }

  start(port: number): void {
    this.expressServer.listen(port, () => {
      console.log(port);
    });
  }

  addEndpoint(
    method: RequestMethod,
    path: string,
    handler: RequestHandler
  ): void {
    this.expressServer[method](path, async (req, res) => {
      const requestResponse = await handler(
        this.formatRequestHandlerEntry(req)
      );
      res.status(requestResponse.statusCode).json(requestResponse.data);
    });
  }

  private formatRequestHandlerEntry(request: Request): HandlerEntry {
    return {
      body: request.body,
      params: request.params,
      query: request.query,
    };
  }
}
