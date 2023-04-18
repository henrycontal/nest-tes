import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
        console.log('Hello From service!!');
        return `${JSON.stringify(process.env, null, 4)}`;
    }
}
