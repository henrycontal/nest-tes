import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MongoConfigService {
    constructor(private readonly config: ConfigService) {}

    public get URI(): string {
        return this.config.get<string>('mongo.uri');
    }
}
