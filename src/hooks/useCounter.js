import { useState } from 'react';

export const useCounter = (initialValue = 0) => {
    const [value, setValue] = useState(initialValue);

    const increment = () => {
        if (value < 30) setValue(value +1);
    };

    const decrement = () => {
        if (value !== 0) setValue(value -1);
    };

    const increment10 = () => {
        if (value < 30) setValue(value +10)
    };

    const decrement10 = () => {
        if (value !== 0) setValue(value -10);
    };

    const reset = () => {
        setValue(0);
    };

    return {
        value, setValue, increment, decrement, reset, increment10, decrement10
    };
};