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
import { Model, Query } from 'mongoose';
import { Grant, GrantDocument } from './schemas/grant.schema';
export declare class GrantRepository {
    private grantModel;
    constructor(grantModel: Model<GrantDocument>);
    findByQuery(query: Query<GrantDocument, GrantDocument>): Promise<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Grant> & Omit<Grant & {
        _id: import("mongoose").Types.ObjectId;
    }, never>> & Omit<import("mongoose").Document<unknown, {}, Grant> & Omit<Grant & {
        _id: import("mongoose").Types.ObjectId;
    }, never> & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, never>)[]>;
}
