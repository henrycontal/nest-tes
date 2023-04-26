/// <reference types="node_modules/mongoose/types/aggregate" />
/// <reference types="node_modules/mongoose/types/callback" />
/// <reference types="node_modules/mongoose/types/collection" />
/// <reference types="node_modules/mongoose/types/connection" />
/// <reference types="node_modules/mongoose/types/cursor" />
/// <reference types="node_modules/mongoose/types/document" />
/// <reference types="node_modules/mongoose/types/error" />
/// <reference types="node_modules/mongoose/types/expressions" />
/// <reference types="node_modules/mongoose/types/helpers" />
/// <reference types="node_modules/mongoose/types/middlewares" />
/// <reference types="node_modules/mongoose/types/indexes" />
/// <reference types="node_modules/mongoose/types/models" />
/// <reference types="node_modules/mongoose/types/mongooseoptions" />
/// <reference types="node_modules/mongoose/types/pipelinestage" />
/// <reference types="node_modules/mongoose/types/populate" />
/// <reference types="node_modules/mongoose/types/query" />
/// <reference types="node_modules/mongoose/types/schemaoptions" />
/// <reference types="node_modules/mongoose/types/schematypes" />
/// <reference types="node_modules/mongoose/types/session" />
/// <reference types="node_modules/mongoose/types/types" />
/// <reference types="node_modules/mongoose/types/utility" />
/// <reference types="node_modules/mongoose/types/validation" />
/// <reference types="node_modules/mongoose/types/virtuals" />
/// <reference types="node_modules/mongoose/types" />
/// <reference types="node_modules/mongoose/types/inferschematype" />
import { HydratedDocument } from 'mongoose';
import { IChannel } from '../interfaces/channel.interface';
export declare type ChannelDocument = HydratedDocument<Channel>;
export declare class Channel implements IChannel {
    _id: string;
}
export declare const ChannelSchema: import("mongoose").Schema<Channel, import("mongoose").Model<Channel, any, any, any, import("mongoose").Document<unknown, any, Channel> & Omit<Channel & Required<{
    _id: string;
}>, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Channel, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Channel>> & Omit<import("mongoose").FlatRecord<Channel> & Required<{
    _id: string;
}>, never>>;
