import Header from "components/Header/Header";
import { Navigate, Outlet } from "react-router-dom";
import { Auth } from "services/auth/auth-service";

import "./index.scss";

function PrivateRoutes(): JSX.Element {

    if (!Auth.accessToken) {
        return <Navigate to="/login" />;
    }

    return (
        <>
            <Header />
            <div className="dashboard-container">
                <Outlet />
            </div>
        </>
    );
}

export default PrivateRoutes;
