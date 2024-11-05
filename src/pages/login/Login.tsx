import { Typography, Spin, Input, Button } from "antd";
import { MailOutlined, KeyOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useForm, Controller} from "react-hook-form";
import { LoginFormValues } from "./types";
import "./index.scss";
import GoogleAuth from "components/auth/GoogleAuth/GoogleAuth";
import { Auth } from "services/auth/auth-service";
import { useNavigate } from "react-router-dom";
import FacebookAuth from "components/auth/FacebookAuth/FacebookAuth";
import { ROUTES } from "constants/routes";

export function Login(): JSX.Element {
    const [isLoginError, setIsLoginError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const {control, handleSubmit} = useForm<LoginFormValues>();
    const navigate = useNavigate();

    const onEmailLoginSubmit = async ({email, password}: LoginFormValues): Promise<void> => {
        setIsLoginError(false);
        setIsLoading(true);

        // this method mock default login (with email and password)
        const res = await Auth.defaultLogin(email, password);
       
        if (!res.success) {
            return setIsLoginError(true);
        }
        navigate(ROUTES.HOME);
        setIsLoading(false);
    };

    return (
        <div className="login-container">
            <Spin
                spinning={isLoading} 
                tip="Loading"
                size="default"
            >
                <Typography.Title>Log In</Typography.Title>
                <form className="login-form" onSubmit={handleSubmit(onEmailLoginSubmit)}>
                    <Controller
                        control={control}
                        name="email"
                        render={(props) => (
                            <Input
                                type="email" 
                                size="large"
                                placeholder="Email"
                                prefix={<MailOutlined />}
                                {...props.field}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="password"
                        render={(props) => (
                            <Input.Password 
                                size="large" 
                                placeholder="Password" 
                                prefix={<KeyOutlined />} 
                                visibilityToggle={{
                                    visible: passwordVisible,
                                    onVisibleChange: setPasswordVisible 
                                }}
                                {...props.field}
                            />
                        )}
                    />
                    <Button type="primary" htmlType="submit">Log In</Button>
                    <div className="alternative-login-buttons-container">
                        <GoogleAuth onError={() => setIsLoginError(true)} onSuccess={(token)=> Auth.setAccessToken(token, "google")} />
                        <FacebookAuth onError={() => setIsLoginError(true)} onSuccess={(token)=> Auth.setAccessToken(token, "facebook")} />
                    </div>
                </form>
            </Spin>
            {isLoginError && <Typography.Text className="error-message" type="danger">Please try again later or attempt an alternative login method.</Typography.Text>}
        </div>
    );
}