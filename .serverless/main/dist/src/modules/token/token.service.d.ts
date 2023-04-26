import { TokenSerializer } from './serializers/token.serializer';
import { TokenRepository } from './token.repository';
export declare class TokenService {
    private readonly repository;
    constructor(repository: TokenRepository);
    getTokenByAccessToken(accessToken: string): Promise<TokenSerializer>;
    isExpired(token: TokenSerializer): void;
}
