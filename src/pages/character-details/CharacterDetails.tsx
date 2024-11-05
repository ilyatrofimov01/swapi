import { Button, Spin } from "antd";
import { useFetch } from "hooks/useFetch/useFetch";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Character } from "types/character";
import CharacterDetailsComponent from "components/CharacterDetails/CharacterDetailsComponent";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { ROUTES } from "constants/routes";

export function CharacterDetails(): JSX.Element {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const characterDetailsUrl = searchParams.get("characterUrl");

    if (!characterDetailsUrl) {
        return <div>Character url is not Provided!</div>;
    }
    const { data, isError, isLoading } = useFetch<Character>({ url: characterDetailsUrl });

    if (isError) {
        return <div>Something went wrong</div>;
    }

    return (
        <Spin
            spinning={isLoading} 
            tip="Loading"
            size="default"
        >   <Button icon={<ArrowLeftOutlined />} onClick={() => navigate(ROUTES.HOME)}>Back</Button>
            {data && <CharacterDetailsComponent character={data} />}
        </Spin>
    );
}