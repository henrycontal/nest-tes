import * as mongoose from 'mongoose';
import { IToken } from '../interfaces/token.interface';
export declare type TokenDocument = mongoose.HydratedDocument<Token>;
export declare class Token implements IToken {
    iat: string;
    accessToken: string;
    accessTokenExp: string;
    refreshToken: string;
    refreshTokenExp: string;
    rotations: number;
    session: mongoose.Schema.Types.ObjectId;
    clientId: string;
    scope: string;
}
export declare const TokenSchema: mongoose.Schema<Token, mongoose.Model<Token, any, any, any, mongoose.Document<unknown, any, Token> & Omit<Token & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Token, mongoose.Document<unknown, {}, mongoose.FlatRecord<Token>> & Omit<mongoose.FlatRecord<Token> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
