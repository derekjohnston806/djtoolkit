"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         Server.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         @author:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           - Derek Johnston
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         @desc:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           - A helper class for configuring and running an express.js server.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */


var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// BEGIN CLASS
var Server = function () {
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
  function Server() {
    var port = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : process.env.PORT || 8888;
    var routes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Server);

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


  _createClass(Server, [{
    key: "setPort",
    value: function setPort(port) {
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

  }, {
    key: "addRoute",
    value: function addRoute(path, route) {
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

  }, {
    key: "start",
    value: function start(options) {
      var _this = this;

      var app = (0, _express2.default)();
      // Configure the routes
      for (var key in this.routes) {
        var route = this.routes[key];
        if (route.type.toUpperCase() === "POST") {
          app.post(key, route.handler);
        } else if (route.type.toUpperCase() === "GET") {
          app.get(key, route.handler);
        }
      }

      if (options.hasStatic) {
        if (options.staticDir) {
          app.use(_express2.default.static(staticDir));
        } else {
          app.use(_express2.default.static(path.join(__dirname, "public")));
        }
      }

      this.instance = app.listen(this.port, function () {
        if (!options.test) {
          console.log("Server is listening at port:", _this.port);
        }
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

  }, {
    key: "stop",
    value: function stop() {
      if (this.instance) {
        this.instance.close();
      } else {
        throw "Attempted to stop a non-existant server instance.";
      }
    }
  }]);

  return Server;
}();

exports.default = Server;
;
// END OF CLASS