import { useEffect, useState } from "react";
import { UseFetchProps, UseFetchResponse } from "./types";

export function useFetch<T>({url}: UseFetchProps<T>): UseFetchResponse<T> {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState<T>();

    const singleFetch = async (urlToFetch: string): Promise<void> => {
        const response = await fetch(urlToFetch);
        const resBody = await response.json() as T;
        setData(resBody);
    };

    const batchFetch = async (urls: string[]): Promise<void> => {
        const responses = await Promise.allSettled(urls.map(fetchUrl => fetch(fetchUrl)));
        const resBodies = await Promise.allSettled(responses.map(res => {

            if (res.status === "fulfilled") {
                return res.value.json();
            }

            Promise.resolve(null);
        }));

        const filtered = resBodies
            .filter(res => res.status === "fulfilled" && res.value !== null)
            .map((el) => (el as PromiseFulfilledResult<keyof T>).value);

        setData(filtered as T);
    };

    const fetchData = async (): Promise<void> => {
        setIsError(false);
        setIsLoading(true);

        try {
            if (Array.isArray(url)) {
                return await batchFetch(url);
            } 
            await singleFetch(url);
            
        } catch (error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    return {
        isLoading,
        isError,
        data
    };
}