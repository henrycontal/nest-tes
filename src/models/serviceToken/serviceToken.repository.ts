import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
    ServiceToken,
    ServiceTokenDocument,
} from './schemas/serviceToken.schema';

@Injectable()
export class ServiceTokenRepository {
    constructor(
        @InjectModel(ServiceToken.name)
        private serviceTokenModel: Model<ServiceTokenDocument>,
    ) {}
}
