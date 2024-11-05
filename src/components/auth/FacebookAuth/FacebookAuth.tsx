import { Button } from "antd";
import { useEffect } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "constants/routes";

declare global {
    interface Window {
        fbAsyncInit: () => void;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        FB: any;
    }
}

interface FacebookAuthProps {
    onSuccess: (credential: string) => void;
    onError: () => void;
}

function FacebookAuth({onError, onSuccess}: FacebookAuthProps): JSX.Element {
    const facebookAppId = process.env.REACT_APP_FACEBOOK_APP_ID || "";
    const navigate = useNavigate();

    useEffect(() => {
        // Load Facebook SDK
        window.fbAsyncInit = () => {
            window.FB.init({
                appId: facebookAppId,
                cookie: true,
                xfbml: true,
                version: "v12.0",
            });
        };
  
        // Load Facebook SDK script
        const script = document.createElement("script");
        script.src = "https://connect.facebook.net/en_US/sdk.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
  
        return () => {
            document.body.removeChild(script);
        };
    }, []);
  
    const handleFacebookLogin = () => {
        window.FB.login((response: {authResponse: {accessToken: string}}) => {
            if (response.authResponse) {
                onSuccess(response.authResponse.accessToken);
                navigate(ROUTES.HOME);
            } else {
                onError();
            }
        });
    };
  
    return (
        <Button className="facebook-login-button" onClick={handleFacebookLogin}>
            <div className="facebook-icon" />
        </Button>
    );
}
  
export default FacebookAuth;