import { Injectable } from '@nestjs/common';
import { ServiceTokenRepository } from './serviceToken.repository';

@Injectable()
export class ServiceTokenService {
    constructor(private readonly repository: ServiceTokenRepository) {}
}
