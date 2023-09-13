import { ConnectClient } from "@hilla/frontend";
import { NoopMiddleware } from "./noop-middleware.js";
import { ResponseHandlerMiddleware } from "./response-handler-middleware.js";

const client = new ConnectClient({ prefix: "connect", middlewares: [
    NoopMiddleware,
    ResponseHandlerMiddleware,
]});

export default client;
