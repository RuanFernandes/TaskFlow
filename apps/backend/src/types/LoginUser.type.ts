export interface LoginUser {
    access_token: string;
    user: {
        id: string;
        email: string;
        name: string;
    };
}
