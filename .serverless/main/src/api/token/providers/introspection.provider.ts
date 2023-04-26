import { Injectable } from '@nestjs/common';

@Injectable()
export class IntrospectionProvider {
    public introspection() {
        return {
            message: 'POST /introspection path',
        };
    }
}
