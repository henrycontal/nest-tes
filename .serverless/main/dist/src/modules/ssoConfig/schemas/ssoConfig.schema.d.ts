import * as mongoose from 'mongoose';
import { ISSOConfig } from '../interfaces/ssoConfig.interface';
export declare type ssoConfigDocument = mongoose.HydratedDocument<ssoConfig>;
export declare class ssoConfig implements ISSOConfig {
    _id: string;
    value: unknown;
}
export declare const ssoConfigSchema: mongoose.Schema<ssoConfig, mongoose.Model<ssoConfig, any, any, any, mongoose.Document<unknown, any, ssoConfig> & Omit<ssoConfig & Required<{
    _id: string;
}>, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ssoConfig, mongoose.Document<unknown, {}, mongoose.FlatRecord<ssoConfig>> & Omit<mongoose.FlatRecord<ssoConfig> & Required<{
    _id: string;
}>, never>>;
