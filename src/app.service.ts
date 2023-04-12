import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
        return `Hello World!, current env -> ${process.env.NODE_ENV}`;
    }
}
