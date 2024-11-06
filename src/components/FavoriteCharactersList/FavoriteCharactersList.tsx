import { Spin, Typography } from "antd";
import CharacterCard from "components/shared-components/CharacterCard/CharacterCard";
import { useFetch } from "hooks/useFetch/useFetch";
import { observer } from "mobx-react-lite";
import { useStore } from "store/useStore";
import { Character } from "types/character";

import "./index.scss";

const FavoriteCharactersList = observer(function (): JSX.Element {
    const {favoriteCharactersStore: {favoriteCharactersUrlList}} = useStore();
    const { data, isError, isLoading } = useFetch<Character[]>({ url: favoriteCharactersUrlList });

    if (isError) {
        return <div>Something went wrong</div>;
    }

    return (
        <Spin
            spinning={isLoading} 
            tip="Loading"
            size="default"
        >
            {data?.length === 0 && <Typography.Text>No favorite characters selected</Typography.Text>}
            <div className="characters-list">
                {data?.map((character) => <CharacterCard key={character.name} character={character} />)}
            </div>
        </Spin> 
    );
});

export default FavoriteCharactersList;