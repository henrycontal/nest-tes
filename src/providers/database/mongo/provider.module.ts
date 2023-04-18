import { Module } from '@nestjs/common';
import { MongooseModule, MongooseModuleFactoryOptions } from '@nestjs/mongoose';
import { MongoConfigModule } from '../../../config/database/mongo/config.module';
import { MongoConfigService } from '../../../config/database/mongo/config.service';

@Module({
    imports: [
        MongooseModule.forRootAsync({
            imports: [MongoConfigModule],
            useFactory: async (config: MongoConfigService) => {
                console.log(config.URI);

                return {
                    uri: config.URI,
                    connectionFactory: (connection, name) => {
                        console.log(connection, name);
                    },
                    connectionErrorFactory: (error) => {
                        console.log('error', error);
                    },
                } as MongooseModuleFactoryOptions;
            },
            inject: [MongoConfigService],
        }),
    ],
    providers: [],
})
export class MongoDatabaseProviderModule {}
