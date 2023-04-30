import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PSConfigService } from 'nestjs-param-store';

@Injectable()
export class MongoConfigService {
    constructor(private readonly config: ConfigService, private readonly ps: PSConfigService) {}

    public get URI(): string {
        const host = this.ps.get('MONGO_HOST_TEST');
        const credentials = this.ps.get('MONGO_CREDENTIALS_TEST');
        const database = this.ps.get('MONGO_DATABASE_TEST');

        const uri = this.config.get<string>('mongo.uri');

        return uri.replace('{credentials}', credentials).replace('{host}', host).replace('{database}', database);
    }
}
