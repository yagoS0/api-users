import { FastifyInstance } from "fastify";
import { getUser, setUser } from "../controller/userController";

function usersRouter(
  server: FastifyInstance,
  _: any,
  done: (err?: Error | undefined) => void
) {
  server.get("/", getUser);

  server.post("/", setUser);

  done();
}

export default usersRouter;
