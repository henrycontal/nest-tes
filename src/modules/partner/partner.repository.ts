import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Partner, PartnerDocument } from './schemas/partner.schema';

@Injectable()
export class PartnerRepository {
    constructor(
        @InjectModel(Partner.name) private partnerModel: Model<PartnerDocument>,
    ) {}
}
