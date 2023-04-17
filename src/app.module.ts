import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TokenModule } from './token/token.module';
import { UserModule } from './user/user.module';

import { AppConfigModule } from './config/app/config.module';

import { AwsSmmProviderModule } from './providers/aws/ssm/provider.module';
import { MongoDatabaseProviderModule } from './providers/database/mongo/provider.module';

@Module({
    imports: [
        AppConfigModule,
        UserModule,
        TokenModule,
        MongoDatabaseProviderModule,
        AwsSmmProviderModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
