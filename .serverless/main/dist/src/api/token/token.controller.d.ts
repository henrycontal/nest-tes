import { IntrospectionProvider } from './providers/introspection.provider';
import { RefreshProvider } from './providers/refresh.provider';
import { RevocationProvider } from './providers/revocation.provider';
export declare class TokenController {
    private readonly refreshProvider;
    private readonly introspectionProvider;
    private readonly revocationProvider;
    constructor(refreshProvider: RefreshProvider, introspectionProvider: IntrospectionProvider, revocationProvider: RevocationProvider);
    refresh(): {
        message: string;
    };
    introspection(): {
        message: string;
    };
    revocation(): {
        message: string;
    };
}
