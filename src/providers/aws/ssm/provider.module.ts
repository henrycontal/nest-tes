import { Module } from '@nestjs/common';
import { PSConfigModule } from 'nestjs-param-store';
import { PSConfigOptions } from 'nestjs-param-store/dist/interfaces';
import { AwsSMMConfigModule } from '../../../config/aws/ssm/config.module';
import { AwsSSMConfigService } from '../../../config/aws/ssm/config.service';

const getSSMConfigurations = (config: AwsSSMConfigService): PSConfigOptions => {
    if (process.env.NODE_ENV === 'production') {
        return {
            ssmParamStorePath: '/',
            ssmClientOptions: {
                endpoint: config.SSM_ENDPOINT,
                region: config.REGION,
            },
            ssmDecryptParams: true,
        };
    }

    return {
        ssmParamStorePath: '/',
        ssmClientOptions: {
            credentials: {
                accessKeyId: config.ACCESS_KEY_ID,
                secretAccessKey: config.SECRET_ACCESS_KEY,
            },
            region: config.REGION,
        },
        ssmDecryptParams: true,
    };
};

@Module({
    imports: [
        PSConfigModule.registerAsync({
            imports: [AwsSMMConfigModule],
            useFactory: async (config: AwsSSMConfigService) =>
                getSSMConfigurations(config),
            inject: [AwsSSMConfigService],
        }),
    ],
})
export class AwsSmmProviderModule {}
