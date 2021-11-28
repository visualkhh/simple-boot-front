export type User = {
    id: number;
    name?: string;
    email?: string;
};

export interface UserService {
    sayHello(): string;
    getUserData(param: User): Promise<User>;
}
