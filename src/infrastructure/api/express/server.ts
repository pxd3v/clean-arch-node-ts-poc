import express from "express";
import bodyParser from "body-parser";
import { ServerInterface, RequestHandler } from "../../../interface/api/serverInterface";

export class ServerExpress implements ServerInterface {
  private expressServer: express.Express;

  constructor() {
    this.expressServer = express();
    this.expressServer.use(bodyParser.json())
  }

  start(port: number): void {
    this.expressServer.listen(port, () => {
      console.log(port);
    });
  }

  addGet(resource: string, handler: RequestHandler) {
    this.expressServer.get(resource, async (req, res) => {
      const requestResponse = await handler({
        query: req.query
      });
      res.status(requestResponse.statusCode).json(requestResponse.data);
    });
  }

  addPost(resource: string, handler: RequestHandler) {
    this.expressServer.post(resource, async (req, res) => {
      const requestResponse = await handler({
        body: req.body
      });
      res.status(requestResponse.statusCode).json(requestResponse.data);
    });
  }
}
