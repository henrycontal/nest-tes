import { ConfigService } from '@nestjs/config';
import { PSConfigService } from 'nestjs-param-store';
export declare class MongoConfigService {
    private readonly config;
    private readonly ps;
    constructor(config: ConfigService, ps: PSConfigService);
    get URI(): string;
}
