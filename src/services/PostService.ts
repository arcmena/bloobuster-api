import Post from "../models/Post";

export default class PostService {
    createPost = (authorId: number, content: string): Promise<Post> =>
        new Promise((resolve, reject) =>
            Post.create({ authorId, content })
                .then((response) => resolve(response))
                .catch((error) => reject(error))
        );
}
