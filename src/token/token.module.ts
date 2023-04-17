import { Module } from '@nestjs/common';
import { TokenController } from './token.controller';

@Module({
    imports: [],
    controllers: [TokenController],
})
export class TokenModule {}
