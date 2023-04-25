export interface IClient {
    _id: string;
    clientSecret: string;
    name: string;
    grantTypes: string[];
    redirectUris: string[];
    scope: string;
    logoUri: string;
}
