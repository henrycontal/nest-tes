import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChannelRepository } from './channel.repository';
import { ChannelService } from './channel.service';
import { Channel, ChannelSchema } from './schemas/channel.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Channel.name, schema: ChannelSchema },
        ]),
    ],
    providers: [ChannelService, ChannelRepository],
    exports: [ChannelService],
})
export class ChannelModule {}
