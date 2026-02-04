// import { config } from "dotenv";
import config from "./config";

import http, { IncomingMessage, Server, ServerResponse } from "http";
import { RouteHandler, routes } from "./helpers/RouteHandler";
import "./routes";
import findDynamicRoute from "./helpers/dynamicRouteHandler";

// dynamic route handler


const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const method = req.method?.toUpperCase() || " ";
    const path = req.url;

    const methodMap = routes.get(method);
    const handler: RouteHandler = methodMap?.get(path || " ")!;

    if (methodMap)
      if (handler) {
        handler(req, res);
      } else if (findDynamicRoute(method, path || " ")) {
        const match = findDynamicRoute(method, path || " ");
        (req as any).params = match?.params;
        match?.handler(req, res);
      } else {
        res.writeHead(404, { "content-type": "application/json" });
        res.end(
          JSON.stringify({
            success: false,
            message: "Route not found!!!",
            path,
          }),
        );
      }
  },
);

server.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
