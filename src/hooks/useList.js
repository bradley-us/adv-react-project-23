import { useState } from 'react';

export const useList = (initialValue = []) => {
    const [value, setValue] = useState(initialValue);

    const push = (element) => {
        setValue((actualElements) => [...actualElements, element]);
    };

    const remove = (indexOfList) => {
        setValue((actualElements) => actualElements.filter((_, index) => index !== indexOfList));
    };

    const isEmpty = () => value.length === 0;

    const clear = () => setValue([]);

    const sortList = () => {
        setValue((actualElements) => [...actualElements.sort()])
    }

    var revertList = () => {
        var newData = value;
        var reverseArray = newData.reverse();
        setValue([...reverseArray])
    }

    return {
        value, setValue, push, remove, isEmpty, clear, sortList, revertList
    };
};