import { Expose } from '@nestjs/class-transformer';
import { DateTime } from 'luxon';
import { Schema } from 'mongoose';
import { IToken } from '../interfaces/token.interface';

export class TokenSerializer implements IToken {
    @Expose()
    public iat: string;

    @Expose()
    public accessToken: string;

    @Expose()
    public accessTokenExp: string;

    @Expose()
    public refreshToken: string;

    @Expose()
    public refreshTokenExp: string;

    @Expose()
    public rotations: number;

    @Expose()
    public session: Schema.Types.ObjectId;

    @Expose()
    public clientId: string;

    @Expose()
    public scope: string;

    get isExpired() {
        const currentDate = DateTime.now();
        const expDate = DateTime.fromMillis(parseInt(this.accessTokenExp));

        return expDate < currentDate;
    }
}
