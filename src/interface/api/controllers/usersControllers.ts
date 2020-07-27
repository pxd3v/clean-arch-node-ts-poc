import { RequestResponse } from "../serverInterface";

export class UsersController {
    async getUser(query: any): Promise<RequestResponse> {
        return Promise.resolve({
            statusCode: 200,
            data: query.text
        });
    }

    async postUser(body: any): Promise<RequestResponse> {
        return Promise.resolve({
            statusCode: 201,
            data: body
        })
    }
}