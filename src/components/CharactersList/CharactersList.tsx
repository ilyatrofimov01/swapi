import { Button, Spin } from "antd";
import { useFetch } from "hooks/useFetch/useFetch";
import { GetCharacterResponse } from "types/character";
import CharacterCard from "../shared-components/CharacterCard/CharacterCard";

import "./index.scss";
import { useEffect, useState } from "react";

function CharactersList(): JSX.Element {
    const [url, setUrl] = useState("https://swapi.dev/api/people/");
    const [characters, setCharacters] = useState<GetCharacterResponse["results"]>([]);
    const { data, isError, isLoading } = useFetch<GetCharacterResponse>({ url });

    useEffect(() => {
        if (data) {
            setCharacters(prevCharacters => [...prevCharacters, ...data.results]);
        }
    }, [data]);

    const loadMore = (): void => {
        if (data?.next) {
            setUrl(data.next);
        }
    };

    if (isError) {
        return <div>Something went wrong</div>;
    }

    return (
        <Spin
            spinning={isLoading} 
            tip="Loading"
            size="default"
        >
            <div className="characters-list">
                {characters?.map((character) => <CharacterCard key={character.name} character={character} />)}
            </div>
            {data?.next && (
                <div className="load-more">
                    <Button
                        type="primary" 
                        disabled={isLoading}
                        onClick={loadMore}
                    >
                        Load more
                    </Button>
                </div>
            )}
        </Spin> 
    );
}

export default CharactersList;