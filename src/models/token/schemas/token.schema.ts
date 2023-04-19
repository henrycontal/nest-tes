import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DateTime } from 'luxon';
import * as mongoose from 'mongoose';
import { IToken } from '../interfaces/token.interface';

export type TokenDocument = mongoose.HydratedDocument<Token>;

@Schema({
    versionKey: false,
    timestamps: true,
})
export class Token implements IToken {
    @Prop({
        required: true,
        set: (iat: number) => {
            return `${iat}`;
        },
    })
    iat: string;

    @Prop({
        required: true,
    })
    accessToken: string;

    @Prop({
        default: () => {
            // TODO: INCLUDE THE ACCESS_TOKEN_EXP_MS VAR
            return `${DateTime.now().plus(0).toMillis()}`;
        },
    })
    accessTokenExp: string;

    @Prop({
        required: true,
    })
    refreshToken: string;

    @Prop({
        default: () => {
            // TODO: INCLUDE THE REFRESH_TOKEN_EXP_MS VAR
            return `${DateTime.now().plus(0).toMillis()}`;
        },
    })
    refreshTokenExp: string;

    @Prop({
        type: Number,
        required: true,
    })
    rotations: number;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    })
    session: mongoose.Schema.Types.ObjectId;

    @Prop({
        required: true,
    })
    clientId: string;

    @Prop({
        default: 'openid offline_access email profile',
    })
    scope: string;
}

export const TokenSchema = SchemaFactory.createForClass(Token);
