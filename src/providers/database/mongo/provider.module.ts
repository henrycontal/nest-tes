import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoConfigModule } from '../../../config/database/mongo/config.module';
import { MongoConfigService } from '../../../config/database/mongo/config.service';

@Module({
    imports: [
        MongooseModule.forRootAsync({
            imports: [MongoConfigModule],
            useFactory: async (config: MongoConfigService) => {
                const uri = config.URI;

                console.log(uri);

                return {
                    uri: 'mongodb+srv://admin:IGXG69RIrA84cBzK@cluster0.fkxjjli.mongodb.net/nest',
                };
            },
            inject: [MongoConfigService],
        }),
    ],
})
export class MongoDatabaseProviderModule {}
