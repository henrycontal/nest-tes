import { Schema } from 'mongoose';
import { GrantStatus } from './grant.enum';

export interface IGrant {
    status: GrantStatus;
    customer: Schema.Types.ObjectId;
    clientId: string;
    iat: null | string;
    authorizationCode: string;
    authorizationCodeExp: string;
    ipAddress: string;
    userAgent: string;
}
