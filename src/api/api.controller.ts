import { Controller, Get, Inject, forwardRef } from '@nestjs/common';
import { CatService } from '../domain/cat/cat.service';

@Controller('cats')
export class ApiController {
    constructor(
        @Inject(forwardRef(() => CatService))
        private readonly service: CatService,
    ) {}

    @Get()
    public async getMichis() {
        return this.service.getMichis();
    }
}
