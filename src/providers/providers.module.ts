import { Module } from '@nestjs/common';

import { AwsSmmProviderModule } from './aws/ssm/provider.module';
import { MongoDatabaseProviderModule } from './database/mongo/provider.module';
import { PinoLoggerProvider } from './logger/pino/provider.module';

const modules = [AwsSmmProviderModule, MongoDatabaseProviderModule, PinoLoggerProvider];

@Module({
    imports: modules,
    exports: modules,
})
export class ProvidersModule {}
