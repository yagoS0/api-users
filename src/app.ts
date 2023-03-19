import fastify from "fastify";

import usersRouter from "./routes/users.router";

const start = (opts = {}) => {
  const app = fastify(opts);

  app.register(usersRouter, { prefix: "api/users" });

  return app;
};

export default start;
