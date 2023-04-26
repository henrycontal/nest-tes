import { Model } from 'mongoose';
import { PartnerDocument } from './schemas/partner.schema';
export declare class PartnerRepository {
    private partnerModel;
    constructor(partnerModel: Model<PartnerDocument>);
}
