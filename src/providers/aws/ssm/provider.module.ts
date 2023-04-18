import { Module } from '@nestjs/common';
import { PSConfigModule } from 'nestjs-param-store';
import { AwsSMMConfigModule } from 'src/config/aws/ssm/config.module';
import { AwsSSMConfigService } from 'src/config/aws/ssm/config.service';

@Module({})
export class AwsSmmProviderModule {
    static register() {
        const imports = [];

        if (process.env.NODE_ENV === 'development') {
            imports.push(
                PSConfigModule.registerAsync({
                    imports: [AwsSMMConfigModule],
                    useFactory: async (config: AwsSSMConfigService) => ({
                        ssmParamStorePath: '/',
                        ssmDecryptParams: true,
                        ssmClientOptions: {
                            region: config.REGION,
                        },
                    }),
                    inject: [AwsSSMConfigService],
                }),
            );
        }

        return {
            module: AwsSmmProviderModule,
            imports,
        };
    }
}
