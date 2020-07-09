import express from "express";

//Controllers
import UserController from "./controllers/UserController";
import MovieController from "./controllers/MovieController";
import ReviewController from "./controllers/ReviewController";
import PostController from "./controllers/PostController";

//Middlewares
import isLoggedIn from "./middlewares/isLoggedIn";
import User from "./models/User";

const route = express.Router();

//Admin User
route.get("/users/all", UserController.getUsers);
route.get("/user/:username", UserController.getUserByUsername);

//Client User
route.get("/refreshToken", UserController.refreshToken);
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
route.get("/index", isLoggedIn, MovieController.index);
route.get("/movieIndex", isLoggedIn, MovieController.movieIndex);
route.get("/search/:title", isLoggedIn, MovieController.searchByTitle);
route.get("/title/:id", isLoggedIn, MovieController.getTitleById);

export default route;
