export interface UseFetchProps<T> {
    url: string | string[];
    method?: string;
    onSuccess?: (data: T) => void;
    isLoading?: boolean;
    isError?: boolean;
}

export interface UseFetchResponse<T> {
    isLoading: boolean;
    isError: boolean;
    data: T | undefined;
}