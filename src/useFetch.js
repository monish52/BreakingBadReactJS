import axios from 'axios';
import {useState,useEffect } from 'react';

const useFetch=(url)=>{
    const [data,setData]=useState(null);
    const [isLoading, setIsLoading]=useState(true);

    useEffect(()=>{
        const abortCont=new AbortController();
        axios.get(url,{signal: abortCont.signal})
        .then(res=>{
            setData(res.data);
            setIsLoading(false);
        })
        .catch(err=>{
            if(err.name==='AbortError'){
                console.log('fetch aborted')
            }else{
                setIsLoading(false);
                console.log(err.message);
            }
        })
        return ()=>abortCont.abort();
    },[url]);
    return {data, isLoading};
}

export default useFetch;