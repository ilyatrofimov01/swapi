import { LogoutOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "constants/routes";
import { Auth } from "services/auth/auth-service";

function Header(): JSX.Element {
    const navigate = useNavigate();

    return (
        <div className="header-container">
            <Typography.Title>SWAPI</Typography.Title>
            <div className="links">
                <Button
                    color="default" variant="link"
                    size="large"
                    onClick={() => navigate(ROUTES.HOME)}
                >
                    Home
                </Button>
                <Button
                    color="default" 
                    variant="link"
                    size="large"
                    onClick={() => navigate(ROUTES.FAVORITES)}
                >
                    Favorites
                </Button>
            </div>
            <Button
                variant="outlined"
                icon={<LogoutOutlined />}
                onClick={()=>{
                    Auth.logout();
                    navigate(ROUTES.LOGIN);
                }}
            >Log out
            </Button>

        </div>
    );
}

export default Header;