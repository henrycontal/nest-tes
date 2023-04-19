import { Injectable } from '@nestjs/common';

@Injectable()
export class RevocationProvider {
    public revocation() {
        return {
            message: 'POST /revocation path',
        };
    }
}
