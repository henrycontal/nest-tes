import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ssoConfig, ssoConfigDocument } from './schemas/ssoConfig.schema';

@Injectable()
export class ssoConfigRepository {
    constructor(
        @InjectModel(ssoConfig.name)
        private ssoConfigModel: Model<ssoConfigDocument>,
    ) {}
}
