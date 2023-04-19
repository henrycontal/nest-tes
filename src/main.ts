import { NestFactory } from '@nestjs/core';
import serverlessExpress from '@vendia/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';

import { ApiModule } from './api/api.module';
import { AppConfigService } from './config/app/config.service';

let server: Handler;

async function bootstrap(): Promise<Handler> {
    const app = await NestFactory.create(ApiModule);
    await app.init();

    const appConfig: AppConfigService = app.get(AppConfigService);
    app.setGlobalPrefix(appConfig.STAGE);

    const expressApp = app.getHttpAdapter().getInstance();
    return serverlessExpress({ app: expressApp });
}

export const handler: Handler = async (
    event: any,
    context: Context,
    callback: Callback,
) => {
    server = server ?? (await bootstrap());
    return server(event, context, callback);
};
