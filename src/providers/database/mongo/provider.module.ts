import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoConfigModule } from 'src/config/database/mongo/config.module';
import { MongoConfigService } from 'src/config/database/mongo/config.service';

@Module({
    imports: [
        MongooseModule.forRootAsync({
            imports: [MongoConfigModule],
            useFactory: async (config: MongoConfigService) => ({
                uri: config.URI,
            }),
            inject: [MongoConfigService],
        }),
    ],
    providers: [],
})
export class MongoDatabaseProviderModule {}
