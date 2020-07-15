"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const PostService_1 = tslib_1.__importDefault(require("../services/PostService"));
const GET = {
    getPosts: async (_req, res) => {
        try {
            const postService = new PostService_1.default();
            const posts = await postService.getPosts();
            res.status(200).send({ posts });
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
            res.status(200).send({ post });
        }
        catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
};
const POST = {
    createPost: async (req, res) => {
        try {
            const data = req.body;
            const postService = new PostService_1.default();
            const post = await postService.createPost(data);
            res.status(201).send({ post });
        }
        catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
};
exports.default = Object.assign(Object.assign({}, GET), POST);
//# sourceMappingURL=PostController.js.map