import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
    public getMichis() {
        return {
            message: 'returning all the michis',
        };
    }
}
