import { useState } from 'react'

export default function useLocalStorageState(key, defaultValue) {
    const [value, setValue] = useState(JSON.parse(localStorage.getItem(key) || defaultValue))

    const updateValue = (newValue) => {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue))
    }

    return [value, updateValue]
}