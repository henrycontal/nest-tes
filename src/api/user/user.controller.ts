import { Controller, Get } from '@nestjs/common';
import { UserProvider } from './providers/user.provider';

@Controller('user')
export class UserController {
    constructor(private readonly userProvider: UserProvider) {}

    @Get()
    getUserInformation() {
        return this.userProvider.getUserInformation();
    }
}
