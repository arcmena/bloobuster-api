import Review from "../models/Review";
import User from "../models/User";

export default class ReviewService {
    getReview = (): Promise<Review[]> =>
        new Promise((resolve, reject) =>
            Review.findAll({
                include: [
                    {
                        model: User,
                        as: "authorInfo",
                        attributes: ["name", "email"],
                    },
                ],
            })
                .then((response) => resolve(response))
                .catch((error) => reject(error))
        );

    getReviewsById = (id: number): Promise<Review> =>
        new Promise((resolve, reject) =>
            Review.findByPk(id)
                .then((response) => resolve(response))
                .catch((error) => reject(error))
        );

    createReview = (
        authorId: string,
        content: string,
        titleId: string,
        title: string,
        titleImg: string
    ): Promise<Review> =>
        new Promise((resolve, reject) =>
            Review.create({
                authorId,
                content,
                titleId,
                title,
                titleImg,
            })
                .then((response) => resolve(response))
                .catch((error) => reject(error))
        );
}
