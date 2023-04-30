import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class ApiController {
    @Get()
    public getMichis() {
        return {
            message: 'returning all the michis',
        };
    }
}
