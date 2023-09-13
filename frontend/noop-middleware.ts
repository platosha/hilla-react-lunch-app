import { MiddlewareContext, MiddlewareFunction, MiddlewareNext } from "@hilla/frontend";

export const NoopMiddleware: MiddlewareFunction =
    async (context: MiddlewareContext, next: MiddlewareNext): Promise<Response> => {
    // Request processing:
    const request: Request = context.request;

    // `fetch()` call:
    const response: Response = await next(context);

    // Response processing:
    response;

    return response;
};
