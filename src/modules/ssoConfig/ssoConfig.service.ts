import { Injectable } from '@nestjs/common';
import { ssoConfigRepository } from './ssoConfig.repository';

@Injectable()
export class ssoConfigService {
    constructor(private readonly repository: ssoConfigRepository) {}
}
