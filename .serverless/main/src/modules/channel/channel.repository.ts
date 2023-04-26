import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Channel, ChannelDocument } from './schemas/channel.schema';

@Injectable()
export class ChannelRepository {
    constructor(
        @InjectModel(Channel.name) private channelModel: Model<ChannelDocument>,
    ) {}

    public findById(channel: string): Promise<ChannelDocument> {
        return this.channelModel.findById(channel).exec();
    }
}
