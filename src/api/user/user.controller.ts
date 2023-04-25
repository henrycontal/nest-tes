import { Controller, Get, Headers } from '@nestjs/common';
import { UserProvider } from './providers/user.provider';

@Controller('user')
export class UserController {
    constructor(private readonly userProvider: UserProvider) {}

    @Get()
    getUserInformation(@Headers('authorization') auth: string, @Headers('x-channel') xChannel: string) {
        return this.userProvider.getUserInformation(auth, xChannel);
    }
}
