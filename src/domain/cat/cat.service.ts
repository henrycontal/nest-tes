import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat, CatDocument } from './schema/cat.schema';

@Injectable()
export class CatService {
    constructor(
        @InjectModel(Cat.name)
        private readonly model: Model<CatDocument>,
    ) {}

    public async getMichis() {
        const docs = await this.model.find().exec();

        return {
            message: 'returning all the michis',
            $: docs,
        };
    }
}
