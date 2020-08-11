import Review from '../models/Post';
import User from '../models/User';

export default class ReviewService {
    getReview = (): Promise<Review[]> =>
        new Promise((resolve, reject) =>
            Review.findAll({
                include: [
                    {
                        model: User,
                        as: 'authorInfo',
                        attributes: ['username', 'email'],
                    },
                ],
            })
                .then(response => resolve(response))
                .catch(error => reject(error)),
        );

    getReviewsById = (id: number): Promise<Review> =>
        new Promise((resolve, reject) =>
            Review.findByPk(id)
                .then(response => resolve(response))
                .catch(error => reject(error)),
        );

    createReview = (
        authorId: number,
        content: string,
        titleId: string,
        title: string,
        titleImg: string,
        rating: number,
    ): Promise<Review> =>
        new Promise((resolve, reject) =>
            Review.create({
                authorId,
                content,
                titleId,
                title,
                titleImg,
                rating,
            })
                .then(response => resolve(response))
                .catch(error => reject(error)),
        );
}
