import * as mongoose from 'mongoose';
import { ISession } from '../interfaces/session.interface';
export declare type SessionDocument = mongoose.HydratedDocument<Session>;
export declare class Session implements ISession {
    iat: string;
    exp: string;
    customer: mongoose.Schema.Types.ObjectId;
    ipAddress: string;
    userAgent: string;
    originClientId: string;
}
export declare const SessionSchema: mongoose.Schema<Session, mongoose.Model<Session, any, any, any, mongoose.Document<unknown, any, Session> & Omit<Session & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Session, mongoose.Document<unknown, {}, mongoose.FlatRecord<Session>> & Omit<mongoose.FlatRecord<Session> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
