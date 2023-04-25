import { Injectable } from '@nestjs/common';
import { ChannelRepository } from './channel.repository';

@Injectable()
export class ChannelService {
    constructor(private readonly repository: ChannelRepository) {}

    public async validate(xChannel: string) {
        const document = await this.repository.findById(xChannel);

        if (!document) {
            console.log(`[ERROR]: ${xChannel} code is invalid`);
            return null;
        }

        return document._id;
    }
}
