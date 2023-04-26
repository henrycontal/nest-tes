import { ChannelRepository } from './channel.repository';
export declare class ChannelService {
    private readonly repository;
    constructor(repository: ChannelRepository);
    validate(xChannel: string): Promise<string>;
}
