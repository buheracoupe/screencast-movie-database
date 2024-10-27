import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useState,useEffect } from 'react';
import { MovieContext } from '../App';
import { useContext } from 'react';

function SearchBar() {
    const { register, handleSubmit, reset } = useForm();
    const [title, setTitle] = useState("");
    const {movieData, setMovieData, isLoading, setIsLoading} = useContext(MovieContext)
    
    


    function onSubmit(data){
        setTitle(data.title)
        console.log(data)
        reset()
    }

    const url =  `https://imdb-com.p.rapidapi.com/search?searchTerm=${title}`

    useEffect(() => {
        if(!title) return//is this enough to avoid useEffect from running onMount?
        
        async function getData(){
            setIsLoading(true);
        try{
            const response = await axios(url, {
                headers : {
                'x-rapidapi-key': '961da30dbcmsh142dafdc76ecb3fp166db5jsn0de86e26b611',
                'x-rapidapi-host': 'imdb-com.p.rapidapi.com'
                }
            })
            console.log(response.data.data.mainSearch.edges)
           await setMovieData(response.data.data.mainSearch.edges)

        }catch(error){
            console.error(error)
        }finally{
                setIsLoading(false);
        }
            
        }
        getData()
    }, [title])


  return (
<form onSubmit={handleSubmit(onSubmit)} className=" flex items-center justify-center p-8">
    <input {...register("title")} className='focus:outline-none p-2' type="text" placeholder="Hancock..." />
    <button className='p-2 bg-black text-white hover:text-orange-800' type="submit">Find Movie</button>
</form>  )
}

export default SearchBar