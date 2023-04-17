import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TokenModule } from './token/token.module';
import { UserModule } from './user/user.module';

import { AppConfigModule } from './config/app/config.module';
import { ProvidersModule } from './providers/providers.module';

@Module({
    imports: [AppConfigModule, UserModule, TokenModule, ProvidersModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
