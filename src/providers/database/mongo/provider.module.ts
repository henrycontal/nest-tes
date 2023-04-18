import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PSConfigService } from 'nestjs-param-store';
import { MongoConfigModule } from '../../../config/database/mongo/config.module';
import { MongoConfigService } from '../../../config/database/mongo/config.service';

@Module({
    imports: [
        MongooseModule.forRootAsync({
            imports: [MongoConfigModule],
            useFactory: async (
                config: MongoConfigService,
                ssm: PSConfigService,
            ) => {
                const uri = config.URI;

                try {
                    const host = ssm.get('MONGO_HOST_TEST');
                    console.log(host);

                    console.log(uri);
                } catch (error) {
                    console.log(JSON.stringify(error));
                }

                return {
                    uri: 'mongodb+srv://admin:IGXG69RIrA84cBzK@cluster0.fkxjjli.mongodb.net/nest',
                };
            },
            inject: [MongoConfigService, PSConfigService],
        }),
    ],
    providers: [],
})
export class MongoDatabaseProviderModule {}
