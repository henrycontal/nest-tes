import { Injectable } from '@nestjs/common';
import { PartnerRepository } from './partner.repository';

@Injectable()
export class PartnerService {
    constructor(private readonly repository: PartnerRepository) {}
}
