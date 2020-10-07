/* eslint-disable */
import {useState} from 'react';

const useBool = (bool = false) => {
    const [isBool,setBool] = useState(bool);
    const change = () => {
        setBool(b => !b)
    }

    return [isBool,change];
} 

export default useBool;