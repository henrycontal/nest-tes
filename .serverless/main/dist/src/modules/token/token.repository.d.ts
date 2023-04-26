import { FilterQuery, Model } from 'mongoose';
import { TokenDocument } from './schemas/token.schema';
export declare class TokenRepository {
    private tokenModel;
    constructor(tokenModel: Model<TokenDocument>);
    findOneByQuery(query: FilterQuery<TokenDocument>): Promise<TokenDocument>;
}
