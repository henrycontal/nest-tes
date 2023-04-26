import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Query } from 'mongoose';
import { Grant, GrantDocument } from './schemas/grant.schema';

@Injectable()
export class GrantRepository {
    constructor(
        @InjectModel(Grant.name) private grantModel: Model<GrantDocument>,
    ) {}

    public findByQuery(query: Query<GrantDocument, GrantDocument>) {
        return this.grantModel.find(query).exec();
    }
}
