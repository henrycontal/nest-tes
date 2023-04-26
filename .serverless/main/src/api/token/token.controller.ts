import { Controller, Post } from '@nestjs/common';

import { IntrospectionProvider } from './providers/introspection.provider';
import { RefreshProvider } from './providers/refresh.provider';
import { RevocationProvider } from './providers/revocation.provider';

@Controller('token')
export class TokenController {
    constructor(
        private readonly refreshProvider: RefreshProvider,
        private readonly introspectionProvider: IntrospectionProvider,
        private readonly revocationProvider: RevocationProvider,
    ) {}

    @Post()
    refresh() {
        return this.refreshProvider.refresh();
    }

    @Post('introspection')
    introspection() {
        return this.introspectionProvider.introspection();
    }

    @Post('revocation')
    revocation() {
        return this.revocationProvider.revocation();
    }
}
