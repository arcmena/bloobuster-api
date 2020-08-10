import express from "express";

//Controllers
import UserController from "./controllers/UserController";
import ApiController from "./controllers/ApiController";
import ReviewController from "./controllers/PostController";

//Middlewares
import isLoggedIn from "./middlewares/isLoggedIn";

const route = express.Router();

//Admin User
route.get("/users/all", UserController.getUsers);
route.get("/user/:username", UserController.getUserByUsername);

//Client User
route.get("/refreshToken", isLoggedIn, UserController.refreshToken);
route.get("/getUser/:id", isLoggedIn, UserController.getUserById);
route.post("/createUser", UserController.createUser);
route.post("/login", UserController.login);

// Post
route.get("/post/:id", isLoggedIn, ReviewController.getPostById);
route.get("/posts", isLoggedIn, ReviewController.getPosts);
route.post("/post/createPost", isLoggedIn, ReviewController.createPost);

// IMDb API
route.get("/index", isLoggedIn, ApiController.index);
route.get("/movieIndex", isLoggedIn, ApiController.movieIndex);
route.get("/search/:title", isLoggedIn, ApiController.searchByTitle);
route.get("/title/:id", isLoggedIn, ApiController.getTitleById);

export default route;
