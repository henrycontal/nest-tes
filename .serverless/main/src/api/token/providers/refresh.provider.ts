import { Injectable } from '@nestjs/common';

@Injectable()
export class RefreshProvider {
    public refresh() {
        return {
            message: 'POST /refresh path',
        };
    }
}
