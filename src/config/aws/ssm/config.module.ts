import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AwsSSMConfigService } from './config.service';
import configuration from './configuration';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
        }),
    ],
    providers: [ConfigService, AwsSSMConfigService],
    exports: [ConfigService, AwsSSMConfigService],
})
export class AwsSMMConfigModule {}
