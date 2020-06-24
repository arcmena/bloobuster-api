import User, { UserInterface } from "../models/User";

export default class UserService {
    createUser = (userData: UserInterface): Promise<User> =>
        new Promise((resolve, reject) =>
            User.create(userData)
                .then((response) => resolve(response))
                .catch((error) => reject(error))
        );

    getUsers = (): Promise<User[]> =>
        new Promise((resolve, reject) =>
            User.findAll()
                .then((response) => resolve(response))
                .catch((error) => reject(error))
        );

    getUserByUsername = (username: string): Promise<User> =>
        new Promise((resolve, reject) =>
            User.findOne({
                where: {
                    username,
                },
            })
                .then((response) => resolve(response))
                .catch((error) => reject(error))
        );
}
