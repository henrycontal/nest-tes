import { Module } from '@nestjs/common';
import { LazyModuleLoader } from '@nestjs/core';

import { ConfigurationsModule } from '../config/config.module';
import { ProvidersModule } from '../providers/providers.module';

import { ApiController } from './api.controller';
import { ApiService } from './api.service';

@Module({
    imports: [ConfigurationsModule, ProvidersModule],
    controllers: [ApiController],
    providers: [ApiService],
})
export class ApiModule {
    constructor(private readonly lazyLoader: LazyModuleLoader) {}
}
