import { registerAs } from '@nestjs/config';

export default registerAs('ssm', () => ({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    ssmEndpoint: process.env.AWS_SSM_ENDPOINT,
    region: process.env.AWS_REGION,
}));
