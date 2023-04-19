import { Injectable } from '@nestjs/common';
import { ChannelRepository } from './channel.repository';

@Injectable()
export class ChannelService {
    constructor(private readonly repository: ChannelRepository) {}

    public async getChannel(xChannel: string) {
        const document = await this.repository.findById(xChannel);

        if (!document) {
            // TODO: THROW ERROR
            console.log(`[ERROR]: ${xChannel} channel does not exist`);
            return null;
        }

        return document._id;
    }
}
