import express from "express";

import UserController from "./controllers/UserController";

const route = express.Router();

route.get("/", UserController.getUsers);
route.post("/", UserController.getUserById);
route.post("/createUser", UserController.createUser);

export default route;
