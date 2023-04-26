import { UserProvider } from './providers/user.provider';
export declare class UserController {
    private readonly userProvider;
    constructor(userProvider: UserProvider);
    getUserInformation(auth: string, xChannel: string): Promise<{
        message: string;
    }>;
}
