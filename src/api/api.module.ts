import { Module } from '@nestjs/common';

import { ConfigurationsModule } from '../config/config.module';
import { ModelModule } from '../models/model.module';
import { ProvidersModule } from '../providers/providers.module';

import { TokenController } from './token/token.controller';
import { UserController } from './user/user.controller';

import * as fromToken from './token/providers';
import * as fromUser from './user/providers';

@Module({
    imports: [ConfigurationsModule, ProvidersModule, ModelModule],
    controllers: [UserController, TokenController],
    providers: [...fromToken.providers, ...fromUser.providers],
})
export class ApiModule {}
