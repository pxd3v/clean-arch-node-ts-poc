export type RequestResponse = {
  statusCode: number;
  data: any;
};

export enum RequestMethod {
  POST = "post",
  GET = "get",
}

export type HandlerEntry = {
  body?: any;
  query?: any;
  params?: any;
};

export type RequestHandler = (
  request: HandlerEntry
) => Promise<RequestResponse>;

export interface ServerInterface {
  start(port: number): void;
  addEndpoint(
    method: RequestMethod,
    path: string,
    handler: RequestHandler
  ): void;
}
