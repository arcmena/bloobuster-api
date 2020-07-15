"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Review_1 = tslib_1.__importDefault(require("../models/Review"));
const User_1 = tslib_1.__importDefault(require("../models/User"));
class ReviewService {
    constructor() {
        this.getReview = () => new Promise((resolve, reject) => Review_1.default.findAll({
            include: [
                {
                    model: User_1.default,
                    attributes: ["name", "email"],
                    through: {
                        attributes: [],
                    },
                },
            ],
        })
            .then((response) => resolve(response))
            .catch((error) => reject(error)));
        this.getReviewsById = (id) => new Promise((resolve, reject) => Review_1.default.findByPk(id)
            .then((response) => resolve(response))
            .catch((error) => reject(error)));
        this.createReview = (authorId, content, titleId, title, titleImg) => new Promise((resolve, reject) => Review_1.default.create({
            authorId,
            content,
            titleId,
            title,
            titleImg,
        })
            .then((response) => resolve(response))
            .catch((error) => reject(error)));
    }
}
exports.default = ReviewService;
//# sourceMappingURL=ReviewService.js.map