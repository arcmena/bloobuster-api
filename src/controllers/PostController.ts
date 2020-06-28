import { Request, Response } from "express";

import PostService from "../services/PostService";

const GET = {
    getPosts: async (_req: Request, res: Response) => {
        try {
            // const { offset } = req.headers;

            const postService = new PostService();

            const posts = await postService.getPosts();

            res.status(200).send({ posts });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },

    getPostById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const postService = new PostService();

            const post = await postService.getPostById(Number(id));

            if (!post) {
                throw new Error(`No post found with the id ${id}`);
            }

            res.status(200).send({ post });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
};

const POST = {
    createPost: async (req: Request, res: Response) => {
        try {
            const data = req.body;

            const postService = new PostService();

            const post = await postService.createPost(data);

            res.status(201).send({ post });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
};

export default { ...GET, ...POST };
