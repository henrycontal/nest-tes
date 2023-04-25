import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ISSOConfig } from '../interfaces/ssoConfig.interface';

export type ssoConfigDocument = mongoose.HydratedDocument<ssoConfig>;

@Schema({
    versionKey: false,
})
export class ssoConfig implements ISSOConfig {
    @Prop({
        required: true,
    })
    _id: string;

    @Prop({
        type: mongoose.Schema.Types.Mixed,
        required: true,
    })
    value: unknown;
}

export const ssoConfigSchema = SchemaFactory.createForClass(ssoConfig);
