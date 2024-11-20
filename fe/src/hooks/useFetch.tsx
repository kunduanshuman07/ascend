import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";

interface UseFetchProps {
    url: string;
    method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    body?: any;
}

const useFetch = ({
    url,
    method = "GET",
    body = null,
}: UseFetchProps) => {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchData = async () => {
        setLoading(true);
        try {
            const config: AxiosRequestConfig = {
                url,
                method,
                data: body,
            };
            const response = await axios(config);
            setData(response.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, error, loading };
};

export default useFetch;
