import { Injectable } from '@nestjs/common';

@Injectable()
export class UserProvider {
    public getUserInformation() {
        return {
            message: 'GET /user path',
        };
    }
}
