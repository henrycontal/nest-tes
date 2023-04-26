import { ConfigService } from '@nestjs/config';
export declare class AwsSSMConfigService {
    private readonly config;
    constructor(config: ConfigService);
    get ACCESS_KEY_ID(): string;
    get SECRET_ACCESS_KEY(): string;
    get SSM_ENDPOINT(): string;
    get SESSION_TOKEN(): string;
    get REGION(): string;
}
