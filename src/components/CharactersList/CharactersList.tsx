import { Spin } from "antd";
import { useFetch } from "hooks/useFetch/useFetch";
import { GetCharacterResponse } from "types/character";
import CharacterCard from "../shared-components/CharacterCard/CharacterCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useRef, useState } from "react";

import "./index.scss";

function CharactersList(): JSX.Element {
    const [url, setUrl] = useState("https://swapi.dev/api/people/");
    const [characters, setCharacters] = useState<GetCharacterResponse["results"]>([]);
    const { data, isError, isLoading } = useFetch<GetCharacterResponse>({ url });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (data?.results) {
            setCharacters(prevCharacters => [...prevCharacters, ...data.results]);
        }

        if (containerRef.current) {
            console.log(containerRef.current.offsetHeight, window.innerHeight);

            if (containerRef.current.offsetHeight < window.innerHeight && data?.next) {
                console.log("load MORE Effect");

                return loadMore();
            }
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
            spinning={isLoading && characters.length === 0} tip="Loading"
            size="default"
        >
            <div className="infinite-scroll-container" ref={containerRef}>
                <InfiniteScroll
                    dataLength={characters.length}
                    next={loadMore}
                    hasMore={!!data?.next}
                    loader={<Spin />}
                >
                    {characters.map((character) => (
                        <CharacterCard key={character.name} character={character} /> 
                    ))}
                </InfiniteScroll>
            </div>
        </Spin>
    );
}

export default CharactersList;