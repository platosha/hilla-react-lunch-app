import { MiddlewareContext, MiddlewareFunction, MiddlewareNext } from "@hilla/frontend";

export const ResponseHandlerMiddleware: MiddlewareFunction =
    async (context: MiddlewareContext, next: MiddlewareNext): Promise<Response> => {
    const response: Response = await next(context);
    const responseClone = response.clone();
    const body = await responseClone.json();
    // process body
    return response;
};
