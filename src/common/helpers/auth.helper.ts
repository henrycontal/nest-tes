export const validate = (token: string) => {
    if (!token) {
        // TODO: THROW EXCEPTION
        console.log('[ERROR]: No access token provided');
    }

    return token.replace('Bearer ', '');
};
