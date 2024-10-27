import React from 'react'
import { useContext } from 'react'
import { MovieContext } from '../App'
import MovieCard from './MovieCard';
import { motion } from 'framer-motion';

const loaderVariants = {
    initial: {
        opacity: 0,
        y: 300
    },
    animate: {
        opacity:[0, .3, .5, .7, .8, .9],
        y: 0,
        transition: {
        repeat: Infinity,
        duration: 3,
        }
    }
  }


function DisplayGrid() {
  const { movieData, isLoading } = useContext(MovieContext);

  
  if (isLoading) {
    return <motion.p
    variants={loaderVariants}
     initial= "initial"
     animate= "animate"
     className='text-4xl text-center w-full font-bold h-full'>Loading...</motion.p>
  }

  return (
<div className="grid gap-4 gap-y-12 auto-fill-grid place-content-center">
{movieData.map(movie => {
    return <MovieCard key={movie.node.entity.id} movieData = {movie.node.entity} isLoading={isLoading} />
})}
</div>  )
}

export default DisplayGrid


