import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LoggerConfigService {
    constructor(private readonly config: ConfigService) {}

    get LEVEL(): string {
        return this.config.get<string>('log.level');
    }
}
