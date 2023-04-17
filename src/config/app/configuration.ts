import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
    stage: process.env.STAGE,
    env: process.env.NODE_ENV,
}));
