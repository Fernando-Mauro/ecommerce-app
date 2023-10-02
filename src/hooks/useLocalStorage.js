import { useEffect, useState } from "react";

const getItem = ({ key  }) => {
    return JSON.parse(localStorage.getItem(key)) || false;
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
                setNewItem(defaultState);
            }else{
                setItem(defaultState);
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