/* eslint-disable */

import {useState} from 'react';
const useAlert = (value={isShow:false,type:"default",message:""}) => {
    const [show,setShow] = useState(value);
    const handleShow = (s) => {
        setShow({
            isShow:s.isShow,
            type:s.type,
            message:s.message
        }) 
    }
    return [show,handleShow];
}

export default useAlert;