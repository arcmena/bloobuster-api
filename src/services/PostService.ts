import Post, { PostInterface } from "../models/Post";

export default class PostService {
    getPostById = (id: number): Promise<Post> =>
        new Promise((resolve, reject) =>
            Post.findByPk(id)
                .then((response) => resolve(response))
                .catch((error) => reject(error))
        );

    createPost = (postData: PostInterface): Promise<Post> =>
        new Promise((resolve, reject) =>
            Post.create(postData)
                .then((response) => resolve(response))
                .catch((error) => reject(error))
        );
}