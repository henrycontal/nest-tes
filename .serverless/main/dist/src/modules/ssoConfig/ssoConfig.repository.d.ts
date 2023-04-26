import { Model } from 'mongoose';
import { ssoConfigDocument } from './schemas/ssoConfig.schema';
export declare class ssoConfigRepository {
    private ssoConfigModel;
    constructor(ssoConfigModel: Model<ssoConfigDocument>);
}
