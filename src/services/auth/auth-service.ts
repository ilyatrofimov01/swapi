import { googleLogout } from "@react-oauth/google";
import { LoginMethod } from "./types";

class AuthService {
    public accessToken: string | null;

    public loginMethod: LoginMethod | null = null;

    constructor() {
        this.accessToken = sessionStorage.getItem("accessToken") || null;
        this.loginMethod = sessionStorage.getItem("loginMethod") as LoginMethod || null;
    }

    // this method mock default login (with email and password)
    public async defaultLogin(email: string, password: string): Promise<{success: boolean}> {
        if (email && password) {

            const token = await new Promise((resolve) => {
                setTimeout(() => {
                    resolve("12345token");
                }, 2000);
            });

            if (!token || typeof token !== "string") {
                return {success: false};
            }
            this.setAccessToken(token, "email");

            return {success:true};
        }

        return {success:false};
    }
    
    public setAccessToken(accessToken: string, loginMethod: LoginMethod): void {
        sessionStorage.setItem("accessToken", accessToken);
        sessionStorage.setItem("loginMethod", loginMethod);
        this.accessToken = accessToken;
        this.loginMethod = loginMethod;
    }
    
    public logout(): void {

        if (this.loginMethod === "google") {
            googleLogout();
        }

        if (this.loginMethod === "facebook") {
            window.FB.logout();
        }

        this.loginMethod = null;
        this.accessToken = null;
        sessionStorage.clear();
    }

}

export const Auth = new AuthService();