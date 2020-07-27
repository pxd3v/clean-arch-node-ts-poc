export type RequestResponse = {
    statusCode: number;
    data: any;
}

export type GenericRequest = {
    body?: any,
    query?: any,
    params?: any
}

export type RequestHandler = (request: GenericRequest) => Promise<RequestResponse>;

export interface ServerInterface {
    start(port: number): void;
    addGet(resource: string, handler: RequestHandler): void;
    addPost(resource: string, handler: RequestHandler): void;
}