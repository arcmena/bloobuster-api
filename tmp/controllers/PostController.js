"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const PostService_1 = tslib_1.__importDefault(require("../services/PostService"));
const ApiService_1 = tslib_1.__importDefault(require("../services/ApiService"));
const GET = {
    getPosts: async (req, res) => {
        try {
            const postService = new PostService_1.default();
            const apiService = new ApiService_1.default();
            const posts = await postService.getPosts();
            function getTitles(posts) {
                posts.forEach(async (post) => {
                    if (post.type === "review") {
                        const titleInfo = "yooooo";
                        Object.assign(post, { titleInfo: titleInfo });
                    }
                });
                return posts;
            }
            const serializedPosts = getTitles(posts);
            res.status(200).send({ serializedPosts });
        }
        catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
    getPostById: async (req, res) => {
        try {
            const { id } = req.params;
            const postService = new PostService_1.default();
            const post = await postService.getPostById(Number(id));
            if (!post) {
                throw new Error(`No post found with the id ${id}`);
            }
            const apiService = new ApiService_1.default();
            const title = await apiService.getTitleById(post.titleId);
            res.status(200).send({ post: { post, titleInfo: title } });
        }
        catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
};
const POST = {
    createPost: async (req, res) => {
        try {
            const postData = req.body;
            const postService = new PostService_1.default();
            const post = await postService.createPost(postData);
            res.status(201).send({ post });
        }
        catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
};
exports.default = Object.assign(Object.assign({}, GET), POST);
//# sourceMappingURL=PostController.js.map