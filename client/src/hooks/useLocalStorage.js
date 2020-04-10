import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        console.log("this is the key", key);
        //get from local storage by key
        const item = window.localStorage.getItem(key);
        //Parse and return stroed json or, if undefined, return intial value
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = value => {
        //sve state
        setStoredValue(value);
        console.log("this is the value", value);
        //save to local storage
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];

}