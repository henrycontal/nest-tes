import { Model } from 'mongoose';
import { SessionDocument } from './schemas/session.schema';
export declare class SessionRepository {
    private sessionModel;
    constructor(sessionModel: Model<SessionDocument>);
}
