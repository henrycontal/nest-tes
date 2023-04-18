import { Module } from '@nestjs/common';

import { AwsSmmProviderModule } from './aws/ssm/provider.module';
import { MongoDatabaseProviderModule } from './database/mongo/provider.module';

@Module({
    imports: [AwsSmmProviderModule.register(), MongoDatabaseProviderModule],
    exports: [AwsSmmProviderModule.register(), MongoDatabaseProviderModule],
})
export class ProvidersModule {}
