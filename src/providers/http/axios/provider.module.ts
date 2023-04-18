import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
    imports: [
        HttpModule.registerAsync({
            useFactory: async () => ({
                timeout: 5000,
                maxRedirects: 5,
            }),
        }),
    ],
})
export class AxiosProviderModule {}
