import { Module } from '@nestjs/common';

import { MongoDatabaseProviderModule } from './database/mongo/provider.module';

@Module({
    imports: [MongoDatabaseProviderModule],
    exports: [MongoDatabaseProviderModule],
})
export class ProvidersModule {}
