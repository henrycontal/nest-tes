import { Injectable } from '@nestjs/common';
import { TokenRepository } from './token.repository';

@Injectable()
export class TokenService {
    constructor(private readonly repository: TokenRepository) {}
}
