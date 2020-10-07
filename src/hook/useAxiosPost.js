/* eslint-disable */
import {useState,useLayoutEffect} from 'react';
import axios from 'axios';
const useAxiosPost = (url,value={}) => {
    const [state,setState] = useState({
        items:'',
        loading:true
    });
    
    useLayoutEffect(() => {
        
        (async () => {
            const response = await axios.post(url,value);
            if(response.statusText= "200"){
                setState({
                    items:response.data,
                    loading:false
                })
            } else {
                setState(state => ({...state, loading:false}))
            }
        })();

    },[]);
    return [state.loading,state.items];
}

export default useAxiosPost;