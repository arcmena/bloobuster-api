import Post, { PostInterface } from "../models/Post";

export default class PostService {
    getPosts = (): Promise<Post[]> =>
        new Promise((resolve, reject) =>
            Post.findAll()
                .then((response) => resolve(response))
                .catch((error) => reject(error))
        );

    getPostById = (id: number): Promise<Post> =>
        new Promise((resolve, reject) =>
            Post.findByPk(id)
                .then((response) => resolve(response))
                .catch((error) => reject(error))
        );

    createPost = (data: PostInterface): Promise<Post> =>
        new Promise((resolve, reject) =>
            Post.create(data)
                .then((response) => resolve(response))
                .catch((error) => reject(error))
        );
}
