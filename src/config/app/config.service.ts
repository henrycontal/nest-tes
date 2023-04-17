import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
    constructor(private readonly config: ConfigService) {}

    public get STAGE(): string {
        return this.config.get<string>('app.stage');
    }
}
