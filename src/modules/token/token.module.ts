import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Token, TokenSchema } from './schemas/token.schema';
import { TokenRepository } from './token.repository';
import { TokenService } from './token.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Token.name,
                schema: TokenSchema,
            },
        ]),
    ],
    providers: [TokenService, TokenRepository],
    exports: [TokenService],
})
export class TokenModule {}
