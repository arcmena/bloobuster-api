import { Request, Response } from "express";

import ReviewService from "../services/ReviewService";
import ApiService from "../services/ApiService";

const GET = {
    getReviews: async (_req: Request, res: Response) => {
        try {
            const reviewService = new ReviewService();

            const reviews = await reviewService.getReview();

            res.status(200).send({ reviews });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },

    getReviewById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const reviewService = new ReviewService();

            const review = await reviewService.getReviewsById(Number(id));

            if (!review) {
                throw new Error(`No review found with the id ${id}`);
            }

            const apiService = new ApiService();

            const title = await apiService.getTitleById(review.titleId);

            res.status(200).send({ review, titleInfo: title });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
};

const POST = {
    createReview: async (req: Request, res: Response) => {
        try {
            const { authorId, content, titleId } = req.body;

            const apiService = new ApiService();
            const reviewService = new ReviewService();

            const titleInfo = await apiService.getTitleById(titleId);

            const imgUrl = String(titleInfo.image)
                .split("V1_")[0]
                .concat("V1_UX192_CR0,4,192,264_AL_.jpg");

            await reviewService.createReview(
                authorId,
                content,
                titleId,
                titleInfo.title,
                imgUrl
            );

            res.status(201).send({ message: "Review Created!" });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
};

export default { ...GET, ...POST };
