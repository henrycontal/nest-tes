import { Schema } from 'mongoose';
export interface ISession {
    iat: string;
    exp: string;
    customer: Schema.Types.ObjectId;
    ipAddress: string;
    userAgent: string;
    originClientId: string;
}
