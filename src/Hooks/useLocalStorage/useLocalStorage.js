import { useState, useEffect } from "react";


const useLocalStorage = (key, initialValue) => {
    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const saveItem = (newItem) => {
        localStorage.setItem(key, JSON.stringify(newItem));
        setItem(newItem);
    }

    useEffect(() => {
        try {
            const localStorageItem = localStorage.getItem(key);
            const parsedItem = JSON.parse(localStorageItem) || initialValue;
            saveItem(parsedItem);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }, []);

    
    return {
        item,
        saveItem,
        loading,
        error,
    };
}


export default useLocalStorage;