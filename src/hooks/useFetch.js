import { useEffect, useState } from "react";

export const useFetch = ({ url }) => {
    const [data, setData] = useState();

    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
    };

    useEffect(() => {
        fetchData();
    }, [url])

    return data;
}