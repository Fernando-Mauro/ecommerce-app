import { useEffect, useState } from "react";

const getItem = ({ key  }) => {
    return JSON.parse(localStorage.getItem(key)) || undefined;
}

export const useLocalStorage = ({ key, defaultState }) => {
    const [item, setItem] = useState(defaultState);
    const [err, setErr] = useState(false);

    const setNewItem = (newItem) => {
        setItem(newItem);
        localStorage.setItem(key, JSON.stringify(newItem));
    }

    useEffect(() => {
        try {
            if(!getItem({key})){
                setItem(defaultState);
            }else{
                setNewItem(getItem({key}));
            }
        } catch {
            setErr(true);
        }
    }, [])



    return {
        item,
        setNewItem,
        err
    }
}