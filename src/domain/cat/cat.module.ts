import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { CatService } from './cat.service';
import { Cat, CatSchema } from './schema/cat.schema';

@Module({
    imports: [MongooseModule.forFeatureAsync([{ name: Cat.name, useFactory: () => CatSchema }])],
    providers: [CatService],
    exports: [CatService],
})
export class CatModule {}
