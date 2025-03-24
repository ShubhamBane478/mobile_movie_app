import { useEffect, useState } from "react"



const useFetch = <T>(fetchMovies : () => Promise<T> , autoFetch = true) => {

    const [data, setData] = useState<T | null>(null);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        setLoading(true);
        try {
           
            setLoading(true);
            setError(null);
            const result = await fetchMovies();
            setData(result);
        } catch (err) {
            // @ts-ignore
            setError(err  instanceof Error ? err : new Error('An Error Occured'));
        } finally {
            setLoading(false);
        }
    }

    const reset = () =>{
        setData(null);
        setError(null);
        setLoading(false);
    }

    useEffect(() => {
        if(autoFetch){
            fetchData();
        }
    }, [])

    return {
        data,
        loading,
        error,
        fetchData,
        reset
    }

}

export default useFetch;