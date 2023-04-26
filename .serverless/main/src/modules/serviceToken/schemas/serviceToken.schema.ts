import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IServiceToken } from '../interfaces/serviceToken.interface';

export type ServiceTokenDocument = HydratedDocument<ServiceToken>;

@Schema({
    versionKey: false,
})
export class ServiceToken implements IServiceToken {
    @Prop({
        required: true,
    })
    _id: string;

    @Prop({
        required: true,
    })
    value: string;
}

export const ServiceTokenSchema = SchemaFactory.createForClass(ServiceToken);
