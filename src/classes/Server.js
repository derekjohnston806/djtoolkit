/**
    Server.js

    @author:
      - Derek Johnston

    @desc:
      - A helper class for configuring and running an express.js server.
*/
import express from "express";
import path from "path";
import approot from "app-root-path";

// BEGIN CLASS
export default class Server {
  /**
    constructor()

    @desc:
      - Create a new instance of the Server class by accepting a
        port number and an object containing route handlers.

    @param:
      - port (Number): The port number for the server. If none is provided, use
        either an environment variable or the value 8888 to set the port.

      - routes (Object): An object containing the API routes for the server. If
        none are provided, instantiate with an empty 'routes' object.

        example => A route for a post request to 'getNames':
          {
            "getNames": {
              type: "POST",
              handler: getNamesHandler()
            }
          }

    @return:
      - A new instance of the Server class.
  */
  constructor(port = process.env.PORT || 8888, routes = {}) {
    this.port = port;
    this.routes = routes;
  }

  /**
    setPort(port)

    @desc:
      - Set the port for the Server instance. If no parameter is provided,
        the method should not override the existing value of port.

    @param:
      - port (Number): The number for the desired server port.

    @return:
      - null
  */
  setPort(port) {
    if (!port) {
      throw "setPort() invoked with no parameters.";
    } else if (typeof port !== "number") {
      throw "setPort() invoked with an invalid paramter.";
    } else {
      this.port = port;
    }
  }

  /**
    addRoute(route)

    @desc:
      - Add a new route to the Server instance.

    @param:
      - path (string): The API path for the route.
      - route (Object): The new route for the server instance.
        SEE CONSTRUCTOR DOCUMENTATION FOR EXAMPLE.

    @return:
      - null
  */
  addRoute(path, route) {
    if (!route) {
      throw "addRoute() invoked with no 'route' parameter.";
    } else if (!route.type || typeof route.type !== "string") {
      throw "addRoute() invoked with invalid 'type' property";
    } else if (!route.handler || typeof route.handler !== "function") {
      throw "addRoute() invoked with invalid 'handler' property";
    } else if (!path || typeof path !== "string") {
      throw "addRoute() invoked with no 'path' parameter.";
    } else if (this.routes[path]) {
      throw "addRoute() cannot overwrite existing route for path " + path;
    } else {
      this.routes[path] = route;
    }
  }

  /**
    start(options)

    @desc:
      - Configure the route handlers and start the server listening at the
        specified port.

    @param:
      - options (Object): Some runtime options for the server.
          - Properties:
              - test (Boolean): Is this a test instance of the server?
              - hasStatic (Boolean): Should the server use the express middleware? Defaults to false
              - staticDir (String): The directory where static content is hosted. Defaults to __dirname + "/public"

    @return:
      - null
  */
  start(options) {
    const app = express();
    // Configure the routes
    for (const key in this.routes) {
      const route = this.routes[key];
      if (route.type.toUpperCase() === "POST") {
        app.post(key, route.handler);
      } else if (route.type.toUpperCase() === "GET") {
        app.get(key, route.handler);
      }
    }

    if (typeof options !== "undefined" && options.hasStatic) {
      if (options.staticDir) {
        console.log("Using static content at path:", options.staticDir);
        app.use(express.static(options.staticDir));
      } else {
        console.log("Using static content at path:", path.join(approot, "public"));
        app.use(express.static(path.join(approot, "public")));
      }
    }

    this.instance = app.listen(this.port, () => {
      console.log("Server is listening at port:", this.port);
    });
  }

  /**
    stop()

    @desc:
      - Stop any currently running instances of the server.

    @param:
      - null

    @return:
      - null
  */
  stop() {
    if (this.instance) {
      this.instance.close();
    } else {
      throw "Attempted to stop a non-existant server instance.";
    }
  }
};
// END OF CLASS
