import Review from "../models/Review";

export default class ReviewService {
    getReview = (): Promise<Review[]> =>
        new Promise((resolve, reject) =>
            Review.findAll()
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
