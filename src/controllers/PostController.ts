import { Request, Response } from 'express';

import PostService from '../services/PostService';
import ApiService from '../services/ApiService';

const GET = {
    getPosts: async (_req: Request, res: Response) => {
        try {
            const postService = new PostService();

            const posts = await postService.getReview();

            res.status(200).send(posts);
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },

    getPostById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const postService = new PostService();
            const apiService = new ApiService();

            const post = await postService.getPostById(Number(id));

            if (!post) {
                throw new Error(`No post found with the id ${id}`);
            }

            const title = await apiService.getTitleById(post.titleId);

            res.status(200).send({ post, titleInfo: title });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
};

const POST = {
    createPost: async (req: Request, res: Response) => {
        try {
            const { authorId, content, titleId, rating } = req.body;

            const apiService = new ApiService();
            const postService = new PostService();

            if (titleId) {
                const titleInfo = await apiService.getTitleById(titleId);

                const imgUrl = String(titleInfo.image).split('V1_')[0].concat('V1_UX192_CR0,4,192,264_AL_.jpg');

                await postService.createReview(authorId, content, titleId, titleInfo.title, imgUrl, rating);

                res.status(201).send({ message: 'Review Created!' });
            } else {
                await postService.createPost(authorId, content);

                res.status(201).send({ message: 'Post Created!' });
            }
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
};

export default { ...GET, ...POST };
