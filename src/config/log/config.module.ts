import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerConfigService } from './config.service';
import configuration from './configuration';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
        }),
    ],
    providers: [ConfigService, LoggerConfigService],
    exports: [ConfigService, LoggerConfigService],
})
export class LoggerConfigModule {}
