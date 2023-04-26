import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GrantRepository } from './grant.repository';
import { GrantService } from './grant.service';
import { Grant, GrantSchema } from './schemas/grant.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Grant.name, schema: GrantSchema }]),
    ],
    providers: [GrantService, GrantRepository],
    exports: [GrantService],
})
export class GrantModule {}
