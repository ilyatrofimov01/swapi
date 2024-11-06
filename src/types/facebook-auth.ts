interface FacebookOAuthResponse {
    status: string;
    authResponse: {
        accessToken: string;
        expiresIn: number;
        signedRequest: string;
        userID: string;
    };
}

export interface FacebookAuthSDK {
    init: (params: { appId: string; cookie: boolean; xfbml: boolean; version: string }) => void;
    getLoginStatus: (callback: (response: FacebookOAuthResponse) => void) => void;
    login: (callback: (response: FacebookOAuthResponse) => void, scope?: string) => void;
    logout: () => void;
    api: (path: string, method: string, params: object, callback: (response: object) => void) => void;
}