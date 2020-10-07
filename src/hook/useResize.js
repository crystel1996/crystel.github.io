/* eslint-disable */
import {useState,useEffect} from 'react';
const useResize = (currentWidth) => {
    const[width, setWidth] = useState(currentWidth);
    
    useEffect(() => {
        const resizeListener = () => {
            setWidth(window.innerWidth)
        };
        window.addEventListener('resize',resizeListener);
        return () => {
            window.removeEventListener('resize',resizeListener);
        }
    },[]);
    return width;
}

export default useResize;