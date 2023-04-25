import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DateTime } from 'luxon';
import * as mongoose from 'mongoose';
import { ISession } from '../interfaces/session.interface';

export type SessionDocument = mongoose.HydratedDocument<Session>;

@Schema({
    versionKey: false,
    timestamps: true,
})
export class Session implements ISession {
    @Prop({
        required: true,
        set: (iat: number) => {
            return `${iat}`;
        },
    })
    iat: string;

    @Prop({
        required: true,
        set: (iat: number) => {
            return `${iat}`;
        },
        default: () => {
            // TODO: INCLUDE THE ID_TOKEN_EXP_MS VAR
            return `${DateTime.now().plus(0).toMillis()}`;
        },
    })
    exp: string;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    })
    customer: mongoose.Schema.Types.ObjectId;

    @Prop({
        required: true,
    })
    ipAddress: string;

    @Prop({
        required: true,
    })
    userAgent: string;

    @Prop({
        required: true,
    })
    originClientId: string;
}

export const SessionSchema = SchemaFactory.createForClass(Session);
