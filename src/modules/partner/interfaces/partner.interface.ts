import { IClient } from './client.interface';

export interface IPartner {
    name: string;
    enrollingSponsorId: number;
    clients: IClient[];
    audiences: string[];
}
