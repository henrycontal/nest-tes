import { Injectable } from '@nestjs/common';
import { ChannelService } from '../../../modules/channel/channel.service';

import { TokenService } from 'src/modules/token/token.service';
import * as AuthHelper from '../../../common/helpers/auth.helper';

@Injectable()
export class UserProvider {
    constructor(private readonly channelService: ChannelService, private readonly tokenService: TokenService) {}

    public async getUserInformation(auth: string, xChannel: string) {
        await this.channelService.validate(xChannel);

        const accessToken = AuthHelper.validate(auth);

        const token = await this.tokenService.getTokenByAccessToken(accessToken);

        return {
            message: 'GET /user path',
        };
    }
}
