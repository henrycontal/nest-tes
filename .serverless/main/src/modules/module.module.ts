import { Module } from '@nestjs/common';

import { ChannelModule } from './channel/channel.module';
import { CustomerModule } from './customer/customer.module';
import { GrantModule } from './grant/grant.module';
import { PartnerModule } from './partner/partner.module';
import { ServiceTokenModule } from './serviceToken/serviceToken.module';
import { SessionModule } from './session/session.module';
import { SSOConfigModule } from './ssoConfig/sssoConfig.module';
import { TokenModule } from './token/token.module';

const modules = [
    ChannelModule,
    CustomerModule,
    GrantModule,
    PartnerModule,
    ServiceTokenModule,
    SessionModule,
    SSOConfigModule,
    TokenModule,
];

@Module({
    imports: modules,
    exports: modules,
})
export class ModuleModule {}
