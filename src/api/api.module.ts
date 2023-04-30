import { Module, forwardRef } from '@nestjs/common';

import { ConfigurationsModule } from '../config/config.module';
import { ProvidersModule } from '../providers/providers.module';

import { CatModule } from 'src/domain/cat/cat.module';
import { ApiController } from './api.controller';

@Module({
    imports: [ConfigurationsModule, ProvidersModule, forwardRef(() => CatModule)],
    controllers: [ApiController],
    providers: [],
})
export class ApiModule {}
