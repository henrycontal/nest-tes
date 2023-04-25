import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { IClient } from '../interfaces/client.interface';
import { IPartner } from '../interfaces/partner.interface';

export type PartnerDocument = mongoose.HydratedDocument<Partner>;

@Schema({
    versionKey: false,
})
export class Partner implements IPartner {
    @Prop({
        required: true,
    })
    name: string;

    @Prop({
        required: true,
    })
    enrollingSponsorId: number;

    @Prop({
        type: mongoose.Types.Array,
    })
    clients: IClient[];

    @Prop([String])
    audiences: string[];
}

export const PartnerSchema = SchemaFactory.createForClass(Partner);
