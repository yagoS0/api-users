import express from "express";

import { createUser, getUser } from "../controller/userController";

const routers  = express.Router()

routers.get("/users", getUser);
routers.post("/users", createUser);



export default routers;
