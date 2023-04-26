import { Module } from '@nestjs/common';

import { AwsSmmProviderModule } from './aws/ssm/provider.module';
import { MongoDatabaseProviderModule } from './database/mongo/provider.module';
import { AxiosProviderModule } from './http/axios/provider.module';

const modules = [
    AxiosProviderModule,
    AwsSmmProviderModule,
    MongoDatabaseProviderModule,
];

@Module({
    imports: modules,
    exports: modules,
})
export class ProvidersModule {}
