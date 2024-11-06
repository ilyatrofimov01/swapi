import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { ROUTES } from "constants/routes";
import { useNavigate } from "react-router-dom";

interface GoogleAuthProps {
    onSuccess: (credential: string) => void;
    onError: () => void;
}

function GoogleAuth({onSuccess, onError}: GoogleAuthProps): JSX.Element {
    const navigate = useNavigate();

    const handleGoogleLogin = (res: CredentialResponse): void => {
        if (!res.credential) return onError();

        onSuccess(res.credential);
        navigate(ROUTES.HOME);
    };

    return (
        <GoogleLogin
            type="icon"
            onSuccess={handleGoogleLogin}
            onError={onError}
        />
    );
}

export default GoogleAuth;