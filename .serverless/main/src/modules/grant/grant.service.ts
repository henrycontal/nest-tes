import { Injectable } from '@nestjs/common';
import { GrantRepository } from './grant.repository';

@Injectable()
export class GrantService {
    constructor(private readonly repository: GrantRepository) {}
}
