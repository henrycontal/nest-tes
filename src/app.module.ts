import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TokenModule } from './token/token.module';
import { UserModule } from './user/user.module';

import { ConfigurationsModule } from './config/config.module';
import { ProvidersModule } from './providers/providers.module';

@Module({
    imports: [UserModule, TokenModule, ConfigurationsModule, ProvidersModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
