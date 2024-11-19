export interface PostsComponentType {
    posts: {
        userId: number;
        id: number;
        title: string;
        body: '';
    }[];
}

export interface PostComponentType {
    post: {
        userId: number;
        id: number;
        title: string;
        body: '';
    };
}
