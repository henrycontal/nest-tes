import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Token, TokenDocument } from './schemas/token.schema';

@Injectable()
export class TokenRepository {
    constructor(@InjectModel(Token.name) private tokenModel: Model<TokenDocument>) {}

    public findOneByQuery(query: FilterQuery<TokenDocument>): Promise<TokenDocument> {
        return this.tokenModel.findOne(query).exec();
    }
}
