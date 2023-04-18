import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('nest-serverless')
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        console.log('Hello From controller!!');
        return this.appService.getHello();
    }
}
