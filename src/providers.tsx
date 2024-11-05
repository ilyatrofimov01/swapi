import { GoogleOAuthProvider } from "@react-oauth/google";
import { StoresContextProvider } from "store/context";

function Providers({children}: {children: React.ReactNode}): JSX.Element {
    const googleClientId = process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID || "";

    return (
        <GoogleOAuthProvider clientId={googleClientId}>
            <StoresContextProvider>
                {children}
            </StoresContextProvider>
        </GoogleOAuthProvider>
    );
}

export default Providers;