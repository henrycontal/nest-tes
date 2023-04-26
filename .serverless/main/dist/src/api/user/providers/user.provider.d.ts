import { ChannelService } from '../../../modules/channel/channel.service';
import { TokenService } from 'src/modules/token/token.service';
export declare class UserProvider {
    private readonly channelService;
    private readonly tokenService;
    constructor(channelService: ChannelService, tokenService: TokenService);
    getUserInformation(auth: string, xChannel: string): Promise<{
        message: string;
    }>;
}
