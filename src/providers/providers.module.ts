import { Module } from '@nestjs/common';

import { AwsSmmProviderModule } from './aws/ssm/provider.module';
import { MongoDatabaseProviderModule } from './database/mongo/provider.module';

@Module({
    imports: [AwsSmmProviderModule, MongoDatabaseProviderModule],
    exports: [AwsSmmProviderModule, MongoDatabaseProviderModule],
})
export class ProvidersModule {}
