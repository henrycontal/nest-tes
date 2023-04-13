import { Controller, Post } from '@nestjs/common';

@Controller('token')
export class TokenController {
    @Post()
    refresh() {
        return {
            message: 'refresh path',
        };
    }

    @Post('introspection')
    introspection() {
        return {
            message: 'introspection path',
        };
    }

    @Post('revocation')
    revocation() {
        return {
            message: 'revocation path',
        };
    }
}
