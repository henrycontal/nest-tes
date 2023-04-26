import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DateTime } from 'luxon';
import * as mongoose from 'mongoose';

import { GrantStatus } from '../interfaces/grant.enum';
import { IGrant } from '../interfaces/grant.interface';

export type GrantDocument = mongoose.HydratedDocument<Grant>;

@Schema({
    versionKey: false,
    timestamps: true,
})
export class Grant implements IGrant {
    @Prop({
        type: String,
        enum: [GrantStatus.ACTIVE, GrantStatus.INACTIVE],
        default: GrantStatus.INACTIVE,
    })
    status: GrantStatus;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    })
    customer: mongoose.Schema.Types.ObjectId;

    @Prop({
        required: true,
    })
    clientId: string;

    @Prop({
        type: String,
        default: null,
    })
    iat: string;

    @Prop({
        required: true,
    })
    authorizationCode: string;

    @Prop({
        default: () => {
            // TODO: INCLUDE THE AUTH_CODE_EXP_MS VARIABLE
            return `${DateTime.now().plus(0).toMillis()}`;
        },
    })
    authorizationCodeExp: string;

    @Prop({
        required: true,
    })
    ipAddress: string;

    @Prop({
        required: true,
    })
    userAgent: string;
}

export const GrantSchema = SchemaFactory.createForClass(Grant);
