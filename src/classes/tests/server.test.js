/**
    server.test.js

    @author:
      - Derek Johnston

    @desc:
      - Provide unit testing for the Server class.
*/
import Server from "../server";

test("Should instantiate a Server object with default properties", () => {
  const server = new Server();
  expect(server.port).toEqual(8888);
  expect(server.routes).toEqual({});
});

test("Should instantiate a Server object with a custom port", () => {
  const port = 5000;
  const server = new Server(port);
  expect(server.port).toEqual(port);
  expect(server.routes).toEqual({});
});

test("Should instantiate a Server object with custom routes", () => {
  const routes = {
    "testPath": {
      type    : "POST",
      handler : () => {}
    }
  };
  const server = new Server(undefined, routes);
  expect(server.port).toEqual(8888);
  expect(server.routes).toEqual(routes);
});

test("Should instantiate a Server object with custom port and routes", () => {
  const routes = {
    "testPath0": {
      type    : "POST",
      handler : () => {}
    },
    "testPath1": {
      type: "GET",
      handler: () => {}
    }
  };
  const port = 4444;
  const server = new Server(port, routes);
  expect(server.port).toEqual(port);
  expect(server.routes).toEqual(routes);
});

test("Should overwrite the existing port value.", () => {
  const server = new Server();
  const port = 5000;
  expect(server.port).toEqual(8888);
  server.setPort(port);
  expect(server.port).toEqual(port);
});

test("Should throw an error when setPort() is invoked with null parameter", () => {
  const server = new Server();

  try {
    server.setPort();
    throw {};
  } catch (error) {
    expect(typeof error).toEqual("string");
  }

});

test("Should throw an error when setPort() is invoked with an invalid parameter.", () => {
  const server = new Server();

  try {
    server.setPort("4444");
    throw {};
  } catch (error) {
    expect(typeof error).toEqual("string");
  }
});

test("Should add a new route to the server instance.", () => {
  const server = new Server();
  const path = "testPath";
  const route = {
    type: "POST",
    handler: () => {}
  };
  const newRoutes = {
    "testPath": route
  };
  expect(server.routes).toEqual({});
  server.addRoute(path, route);
  expect(server.routes).toEqual(newRoutes);
});

test("Should throw an error when no path parameter is provided.", () => {
  const server = new Server();
  const route = {
    type: "POST",
    handler: () => {}
  };
  try {
    server.addRoute(undefined, route);
    throw {};
  } catch (error) {
    expect(typeof error).toEqual("string");
  }
});

test("Should throw an error when an invalid path parameter is provided.", () => {
  const server = new Server();
  const route = {
    type: "POST",
    handler: () => {}
  };

  try {
    server.addRoute(true, route);
    throw {};
  } catch (error) {
    expect(typeof error).toEqual("string");
  }
});

test("Should throw an error when no route parameter is provided.", () => {
  const server = new Server();

  try {
    server.addRoute("testPath");
    throw {};
  } catch (error) {
    expect(typeof error).toEqual("string");
  }
});

test("Should throw an error when a route parameter with no 'type' property is provided.", () => {
  const server = new Server();
  const route = {
    handler: () => {}
  };
  try {
    server.addRoute("testPath", route);
    throw {};
  } catch (error) {
    expect(typeof error).toEqual("string");
  }
});

test("Should throw an error when a route parameter with an invalid 'type' property is provided.", () => {
  const server = new Server();
  const route = {
    type: true,
    handler: () => {}
  };
  try {
    server.addRoute("testPath", route);
    throw {};
  } catch (error) {
    expect(typeof error).toEqual("string");
  }
});

test("Should throw an error when a route parameter with no 'handler' property is provided.", () => {
  const server = new Server();
  const route = {
    type: "POST"
  };

  try {
    server.addRoute("testPath", route);
    throw {};
  } catch (error) {
    expect(typeof error).toEqual("string");
  }
});

test("Should throw an error when a route parameter with an invalid 'handler' property is provided.", () => {
  const server = new Server();
  const route = {
    type: "POST",
    handler: "HANDLER"
  };

  try {
    server.addRoute("testPath", route);
    throw {};
  } catch (error) {
    expect(typeof error).toEqual("string");
  }
});

test("Should throw an error when addRoute tries to overwrite an existing route.", () => {
  const server = new Server(undefined, {
    "testPath": {
      type: "POST",
      handler: () => {}
    }
  });

  const route = {
    type: "POST",
    handler: () => {}
  };

  try {
    server.addRoute("testPath", route);
    throw {};
  } catch (error) {
    expect(typeof error).toEqual("string");
  }
});

test("Should create an start an instance of the express application.", () => {
  const server = new Server();

  server.start({ test: true });
  expect(server.instance).toBeDefined();
  server.stop();
});

test("Should throw an error when trying to stop an instance of the server.", () => {
  const server = new Server();

  try {
    server.stop();
    throw {};
  } catch (error) {
    expect(typeof error).toEqual("string");
  }
});
