import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AwsSSMConfigService {
    constructor(private readonly config: ConfigService) {}

    public get ACCESS_KEY_ID(): string {
        return this.config.get<string>('ssm.accessKeyId');
    }

    public get SECRET_ACCESS_KEY(): string {
        return this.config.get<string>('ssm.secretAccessKey');
    }

    public get SSM_ENDPOINT(): string {
        return this.config.get<string>('ssm.ssmEndpoint');
    }

    public get SESSION_TOKEN(): string {
        return process.env.AWS_SESSION_TOKEN;
    }

    public get REGION(): string {
        return this.config.get<string>('ssm.region');
    }
}
