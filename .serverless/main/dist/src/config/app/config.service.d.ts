import { ConfigService } from '@nestjs/config';
export declare class AppConfigService {
    private readonly config;
    constructor(config: ConfigService);
    get STAGE(): string;
    get ENV(): string;
}
