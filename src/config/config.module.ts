import { Global, Module } from '@nestjs/common';

import { AppConfigModule } from './app/config.module';
import { AwsSMMConfigModule } from './aws/ssm/config.module';
import { MongoConfigModule } from './database/mongo/config.module';

@Global()
@Module({
    imports: [AppConfigModule, AwsSMMConfigModule, MongoConfigModule],
    exports: [AppConfigModule, AwsSMMConfigModule, MongoConfigModule],
})
export class ConfigurationsModule {}
