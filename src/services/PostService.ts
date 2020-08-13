import Post from '../models/Post';
import User from '../models/User';

export default class ReviewService {
    getPosts = (): Promise<Post[]> =>
        new Promise((resolve, reject) =>
            Post.findAll({
                order: [['id', 'DESC']],
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

    getPostById = (id: number): Promise<Post> =>
        new Promise((resolve, reject) =>
            Post.findByPk(id)
                .then(response => resolve(response))
                .catch(error => reject(error)),
        );

    createPost = (authorId: number, content: string): Promise<Post> =>
        new Promise((resolve, reject) =>
            Post.create({ authorId, content })
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
    ): Promise<Post> =>
        new Promise((resolve, reject) =>
            Post.create({
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
