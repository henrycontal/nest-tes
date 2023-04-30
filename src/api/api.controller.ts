import { Controller, Get } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('cats')
export class ApiController {
    constructor(private readonly service: ApiService) {}
    @Get()
    public getMichis() {
        return this.service.getMichis();
    }
}
