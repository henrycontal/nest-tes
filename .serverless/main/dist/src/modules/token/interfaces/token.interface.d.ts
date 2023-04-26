import { Schema } from 'mongoose';
export interface IToken {
    iat: string;
    accessToken: string;
    accessTokenExp: string;
    refreshToken: string;
    refreshTokenExp: string;
    rotations: number;
    session: Schema.Types.ObjectId;
    clientId: string;
    scope: string;
}
