import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IChannel } from '../interfaces/channel.interface';

export type ChannelDocument = HydratedDocument<Channel>;

@Schema({
    versionKey: false,
})
export class Channel implements IChannel {
    @Prop({
        required: true,
    })
    _id: string;
}

export const ChannelSchema = SchemaFactory.createForClass(Channel);
