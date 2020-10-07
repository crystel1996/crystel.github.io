/* eslint-disable */
import {useState,useEffect} from 'react';
const useScroll = (scrollY = 0) => {
    const [currentHeight, setScroll] = useState(scrollY);
    
    useEffect(() => {
        const scrollListener = () => {
            setScroll(window.scrollY)
        };
        window.addEventListener('scroll',scrollListener);
        return () => {
            window.removeEventListener('scroll',scrollListener);
        }
    },[]);
    return currentHeight;
}

export default useScroll;