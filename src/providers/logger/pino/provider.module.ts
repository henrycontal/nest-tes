import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { AppConfigModule } from '../../../config/app/config.module';
import { AppConfigService } from '../../../config/app/config.service';
import { LoggerConfigModule } from '../../../config/log/config.module';
import { LoggerConfigService } from '../../../config/log/config.service';

@Module({
    imports: [
        LoggerModule.forRootAsync({
            imports: [LoggerConfigModule, AppConfigModule],
            useFactory: async (logConfig: LoggerConfigService, appConfig: AppConfigService) => ({
                pinoHttp: {
                    level: logConfig.LEVEL,
                    customProps: () => ({
                        context: 'HTTP',
                    }),
                    transport:
                        appConfig.ENV !== 'production'
                            ? {
                                  target: 'pino-pretty',
                                  options: {
                                      singleLine: true,
                                  },
                              }
                            : null,
                },
            }),
            inject: [LoggerConfigService, AppConfigService],
        }),
    ],
})
export class PinoLoggerProvider {}
