"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ReviewService_1 = tslib_1.__importDefault(require("../services/ReviewService"));
const ApiService_1 = tslib_1.__importDefault(require("../services/ApiService"));
const GET = {
    getReviews: async (_req, res) => {
        try {
            const reviewService = new ReviewService_1.default();
            const reviews = await reviewService.getReview();
            res.status(200).send({ reviews });
        }
        catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
    getReviewById: async (req, res) => {
        try {
            const { id } = req.params;
            const reviewService = new ReviewService_1.default();
            const review = await reviewService.getReviewsById(Number(id));
            if (!review) {
                throw new Error(`No review found with the id ${id}`);
            }
            const apiService = new ApiService_1.default();
            const title = await apiService.getTitleById(review.titleId);
            res.status(200).send({ review, titleInfo: title });
        }
        catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
};
const POST = {
    createReview: async (req, res) => {
        try {
            const { authorId, content, titleId } = req.body;
            const apiService = new ApiService_1.default();
            const reviewService = new ReviewService_1.default();
            const titleInfo = await apiService.getTitleById(titleId);
            const resizeImg = () => {
                const img = String(titleInfo.image).split("V1_")[0];
                return `${img}V1_UX192_CR0,4,192,264_AL_.jpg`;
            };
            const imgUrl = resizeImg();
            const Review = await reviewService.createReview(authorId, content, titleId, titleInfo.title, imgUrl);
            res.status(201).send({ Review });
        }
        catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
};
exports.default = Object.assign(Object.assign({}, GET), POST);
//# sourceMappingURL=ReviewController.js.map