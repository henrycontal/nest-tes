import { Model } from 'mongoose';
import { ChannelDocument } from './schemas/channel.schema';
export declare class ChannelRepository {
    private channelModel;
    constructor(channelModel: Model<ChannelDocument>);
    findById(channel: string): Promise<ChannelDocument>;
}
