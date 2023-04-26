import { Schema } from 'mongoose';
import { IToken } from '../interfaces/token.interface';
export declare class TokenSerializer implements IToken {
    iat: string;
    accessToken: string;
    accessTokenExp: string;
    refreshToken: string;
    refreshTokenExp: string;
    rotations: number;
    session: Schema.Types.ObjectId;
    clientId: string;
    scope: string;
    get isExpired(): boolean;
}
