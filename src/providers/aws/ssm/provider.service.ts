import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError, AxiosRequestConfig } from 'axios';
import { PSConfigService } from 'nestjs-param-store';
import { catchError, firstValueFrom } from 'rxjs';
import { AppConfigService } from 'src/config/app/config.service';
import { AwsSSMConfigService } from 'src/config/aws/ssm/config.service';

@Injectable()
export class SSMService {
    public constructor(
        private readonly ps: PSConfigService,
        private readonly AppConfig: AppConfigService,
        private readonly AwsConfig: AwsSSMConfigService,
        private readonly http: HttpService,
    ) {}

    public async get(name: string, defaultValue?: string) {
        if (this.AppConfig.ENV === 'development') {
            return this.ps.get(name, defaultValue);
        }

        const config: AxiosRequestConfig = {
            headers: {
                'X-Aws-Parameters-Secrets-Token': process.env.AWS_SESSION_TOKEN,
            },
        };

        const { data } = await firstValueFrom(
            this.http
                .get(
                    this.AwsConfig.SSM_ENDPOINT.replace('{name}', name),
                    config,
                )
                .pipe(
                    catchError((error: AxiosError) => {
                        console.log(error);
                        throw 'An error happened!';
                    }),
                ),
        );

        console.log(data);
    }
}
