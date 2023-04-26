import * as mongoose from 'mongoose';
import { IClient } from '../interfaces/client.interface';
import { IPartner } from '../interfaces/partner.interface';
export declare type PartnerDocument = mongoose.HydratedDocument<Partner>;
export declare class Partner implements IPartner {
    name: string;
    enrollingSponsorId: number;
    clients: IClient[];
    audiences: string[];
}
export declare const PartnerSchema: mongoose.Schema<Partner, mongoose.Model<Partner, any, any, any, mongoose.Document<unknown, any, Partner> & Omit<Partner & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Partner, mongoose.Document<unknown, {}, mongoose.FlatRecord<Partner>> & Omit<mongoose.FlatRecord<Partner> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
