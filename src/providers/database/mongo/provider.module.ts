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
                ps: PSConfigService,
            ) => {
                const uri = config.URI.replace(
                    '{credentials}',
                    ps.get('MONGO_CREDENTIALS_TEST'),
                )
                    .replace('{host}', ps.get('MONGO_HOST_TEST'))
                    .replace('{database}', ps.get('MONGO_DATABASE_TEST'));

                return {
                    uri: 'mongodb+srv://admin:IGXG69RIrA84cBzK@cluster0.fkxjjli.mongodb.net/nest',
                };
            },
            inject: [MongoConfigService, PSConfigService],
        }),
    ],
})
export class MongoDatabaseProviderModule {}
