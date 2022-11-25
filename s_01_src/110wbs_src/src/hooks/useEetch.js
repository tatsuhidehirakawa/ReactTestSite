import { useState, useEffect } from "react";

function useFetch(url, config) {
    
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, config);
                const data = await response.json();
                setData(data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };
        fetchData();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return { data, loading, error };
}

export default useFetch;