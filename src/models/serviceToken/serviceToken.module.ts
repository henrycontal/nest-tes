import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
    ServiceToken,
    ServiceTokenSchema,
} from './schemas/serviceToken.schema';
import { ServiceTokenRepository } from './serviceToken.repository';
import { ServiceTokenService } from './serviceToken.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: ServiceToken.name, schema: ServiceTokenSchema },
        ]),
    ],
    providers: [ServiceTokenService, ServiceTokenRepository],
    exports: [ServiceTokenRepository],
})
export class ServiceTokenModule {}
