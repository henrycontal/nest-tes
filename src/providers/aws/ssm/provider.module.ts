import { Module } from '@nestjs/common';
import { PSConfigModule } from 'nestjs-param-store';
import { AwsSMMConfigModule } from '../../../config/aws/ssm/config.module';
import { AwsSSMConfigService } from '../../../config/aws/ssm/config.service';

@Module({
    imports: [
        PSConfigModule.registerAsync({
            imports: [AwsSMMConfigModule],
            useFactory: async (config: AwsSSMConfigService) => ({
                ssmParamStorePath: '/',
                ssmClientOptions: {
                    credentials: {
                        accessKeyId: config.ACCESS_KEY_ID,
                        secretAccessKey: config.SECRET_ACCESS_KEY,
                    },
                    region: config.REGION,
                },
                ssmDecryptParams: true,
            }),
            inject: [AwsSSMConfigService],
        }),
    ],
})
export class AwsSmmProviderModule {}
