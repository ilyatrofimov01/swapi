import { Input, Spin } from "antd";
import { useFetch } from "hooks/useFetch/useFetch";
import { GetCharacterResponse } from "types/character";
import CharacterCard from "../shared-components/CharacterCard/CharacterCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useCallback, useEffect, useRef, useState } from "react";
import debounce from "lodash/debounce";

import "./index.scss";

function CharactersList(): JSX.Element {
    const baseUrl = "https://swapi.dev/api/people/";
    const [url, setUrl] = useState(baseUrl);
    const [characters, setCharacters] = useState<GetCharacterResponse["results"]>([]);
    const { data, isError, isLoading } = useFetch<GetCharacterResponse>({ url });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (data?.results) {
            setCharacters(prevCharacters => [...prevCharacters, ...data.results]);
        }

        if (containerRef.current) {
            if (containerRef.current.offsetHeight < window.innerHeight && data?.next) {
                return loadMore();
            }
        }
    }, [data]);

    const loadMore = (): void => {
        if (data?.next) {
            setUrl(data.next);
        }
    };

    const handleSearch = useCallback(debounce((searchText: string) => {
        setCharacters([]);

        if (!searchText) {
            return setUrl(baseUrl);
        }
        setUrl(`${baseUrl}?search=${searchText}`);
    }, 600), []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target;
        handleSearch(value.trim());
    };

    if (isError) {
        return <div>Something went wrong</div>;
    }

    return (
        <Spin
            spinning={isLoading && characters.length === 0} tip="Loading"
            size="default"
        >
            <Input.Search
                enterButton
                placeholder="Search for characters"
                style={{ marginBottom: 16 }}
                onChange={handleInputChange}
            />
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