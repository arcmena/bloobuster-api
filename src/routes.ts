import express from "express";

//Controllers
import UserController from "./controllers/UserController";
import ApiController from "./controllers/ApiController";
import ReviewController from "./controllers/ReviewController";
import PostController from "./controllers/PostController";

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

// Review
route.get("/review/:id", isLoggedIn, ReviewController.getReviewById);
route.get("/reviews", isLoggedIn, ReviewController.getReviews);
route.post("/review/createReview", isLoggedIn, ReviewController.createReview);

// Post
route.get("/post/:id", isLoggedIn, PostController.getPostById);
route.get("/posts", isLoggedIn, PostController.getPosts);
route.post("/posts/createPost", isLoggedIn, PostController.createPost);

// IMDb API
route.get("/index", isLoggedIn, ApiController.index);
route.get("/movieIndex", isLoggedIn, ApiController.movieIndex);
route.get("/search/:title", isLoggedIn, ApiController.searchByTitle);
route.get("/title/:id", isLoggedIn, ApiController.getTitleById);

export default route;
