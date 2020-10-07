/* eslint-disable */
import {useState} from 'react';
const useCollapse = (collapse = false) => {
    const [isCollapse, setCollapse] = useState(collapse);
    const toCollapse = () => {
        setCollapse(c => !c)
    };
    return [isCollapse,toCollapse];
}

export default useCollapse;