import { useState, useEffect } from 'react';

export type TApiResponse<T> = {
    status: number;
    data: T | null;
    error: any;
    loading: boolean;
};

export const useApiGet = <T>(url: string): TApiResponse<T> => {
    const [response, setResponse] = useState<TApiResponse<T>>({
        status: 0,
        data: null,
        error: null,
        loading: false
    });

    useEffect(() => {
        const fetchData = async () => {
            setResponse((prevResponse) => ({
                ...prevResponse,
                loading: true
            }));

            try {
                const apiResponse = await fetch(url);
                const json = await apiResponse.json();

                setResponse({
                    status: apiResponse.status,
                    data: json,
                    error: null,
                    loading: false
                });
            } catch (error) {
                setResponse((prevResponse) => ({
                    ...prevResponse,
                    error,
                    loading: false
                }));
            }
        };

        fetchData(); // Call fetchData on mount or when `url` changes

        // Optional cleanup logic (e.g., cancelling requests) can go here
        return () => {
            // Cleanup logic if needed
        };
    }, [url]); // Run the effect when `url` changes

    return response;
};