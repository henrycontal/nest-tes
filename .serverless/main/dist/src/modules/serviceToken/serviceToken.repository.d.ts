import { Model } from 'mongoose';
import { ServiceTokenDocument } from './schemas/serviceToken.schema';
export declare class ServiceTokenRepository {
    private serviceTokenModel;
    constructor(serviceTokenModel: Model<ServiceTokenDocument>);
}
