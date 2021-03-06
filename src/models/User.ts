import { Table, Model, Column, AllowNull, Unique, HasMany } from 'sequelize-typescript';

import Post from './Post';

export interface UserInterface {
    username: string;
    name: string;
    email: string;
    password: string;
}

@Table({ tableName: 'users' })
export default class User extends Model<User> implements UserInterface {
    @AllowNull(false)
    @Unique(true)
    @Column
    username: string;

    @AllowNull(false)
    @Column
    name: string;

    @AllowNull(false)
    @Unique(true)
    @Column
    email: string;

    @AllowNull(false)
    @Column
    password: string;

    @HasMany(() => Post)
    post: Post[];
}
