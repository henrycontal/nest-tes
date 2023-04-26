import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ssoConfig, ssoConfigSchema } from './schemas/ssoConfig.schema';
import { ssoConfigRepository } from './ssoConfig.repository';
import { ssoConfigService } from './ssoConfig.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: ssoConfig.name,
                schema: ssoConfigSchema,
            },
        ]),
    ],
    providers: [ssoConfigService, ssoConfigRepository],
    exports: [ssoConfigService],
})
export class SSOConfigModule {}
