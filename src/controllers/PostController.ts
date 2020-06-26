import { Request, Response } from "express";

import PostService from "../services/PostService";
import ApiService from "../services/ApiService";

const GET = {
    getPostById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const postService = new PostService();

            const post = await postService.getPostById(Number(id));

            if (!post) {
                throw new Error(`No post found with the id ${id}`);
            }

            const apiService = new ApiService();

            const title = await apiService.getTitleById(post.titleId);

            res.status(200).send({ post: { post, titleInfo: title } });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
};

const POST = {
    createPost: async (req: Request, res: Response) => {
        try {
            const postData = req.body;

            const postService = new PostService();

            const post = await postService.createPost(postData);

            res.status(201).send({ post });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
};

export default { ...GET, ...POST };
