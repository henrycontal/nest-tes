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
                const host = ssm.get('MONGO_HOST_TEST');
                const credentials = ssm.get('MONGO_CREDENTIALS_TEST');
                const database = ssm.get('MONGO_DATABASE_TEST');

                console.log({
                    host,
                    credentials,
                    database,
                });

                const uri = config.URI.replace('{credentials}', credentials)
                    .replace('{host}', host)
                    .replace('{database}', database);

                console.log(uri);

                return {
                    uri,
                };
            },
            inject: [MongoConfigService, PSConfigService],
        }),
    ],
    providers: [],
})
export class MongoDatabaseProviderModule {}
