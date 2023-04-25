import { plainToClass } from '@nestjs/class-transformer';
import { Injectable } from '@nestjs/common';
import { TokenSerializer } from './serializers/token.serializer';
import { TokenRepository } from './token.repository';

@Injectable()
export class TokenService {
    constructor(private readonly repository: TokenRepository) {}

    public async getTokenByAccessToken(accessToken: string) {
        const tokenDoc = await this.repository.findOneByQuery({ accessToken });

        if (!tokenDoc) {
            // TODO: THROW EXCEPTION
            console.log('[ERROR]: Invalid Token provided.');
        }

        return plainToClass(TokenSerializer, tokenDoc, { excludeExtraneousValues: true });
    }

    public isExpired(token: TokenSerializer) {}
}
