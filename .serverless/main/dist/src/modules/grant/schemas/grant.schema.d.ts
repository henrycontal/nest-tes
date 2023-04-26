import * as mongoose from 'mongoose';
import { GrantStatus } from '../interfaces/grant.enum';
import { IGrant } from '../interfaces/grant.interface';
export declare type GrantDocument = mongoose.HydratedDocument<Grant>;
export declare class Grant implements IGrant {
    status: GrantStatus;
    customer: mongoose.Schema.Types.ObjectId;
    clientId: string;
    iat: string;
    authorizationCode: string;
    authorizationCodeExp: string;
    ipAddress: string;
    userAgent: string;
}
export declare const GrantSchema: mongoose.Schema<Grant, mongoose.Model<Grant, any, any, any, mongoose.Document<unknown, any, Grant> & Omit<Grant & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Grant, mongoose.Document<unknown, {}, mongoose.FlatRecord<Grant>> & Omit<mongoose.FlatRecord<Grant> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
