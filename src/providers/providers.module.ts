import { Module } from '@nestjs/common';

import { AwsSmmProviderModule } from './aws/ssm/provider.module';

const modules = [AwsSmmProviderModule];

@Module({
    imports: modules,
    exports: modules,
})
export class ProvidersModule {}
