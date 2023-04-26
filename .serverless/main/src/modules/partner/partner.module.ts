import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PartnerRepository } from './partner.repository';
import { PartnerService } from './partner.service';
import { Partner, PartnerSchema } from './schemas/partner.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Partner.name, schema: PartnerSchema },
        ]),
    ],
    providers: [PartnerService, PartnerRepository],
    exports: [PartnerService],
})
export class PartnerModule {}
