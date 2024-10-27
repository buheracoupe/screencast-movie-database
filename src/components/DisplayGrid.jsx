import React from 'react'
import { useContext } from 'react'
import { MovieContext } from '../App'
import MovieCard from './MovieCard';
import { motion } from 'framer-motion';


function DisplayGrid() {
  const { movieData, isLoading } = useContext(MovieContext);

  if (isLoading) {
    return <motion.h2
     initial={{ opacity: 0, y:250 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 3 }}
     className='text-4xl text-center w-full font-bold h-full'>Loading...</motion.h2>
  }

  return (
<div className="grid gap-4 gap-y-12 auto-fill-grid place-content-center">
{movieData.map(movie => {
    return <MovieCard key={movie.node.entity.id} movieData = {movie.node.entity} isLoading={isLoading} />
})}
</div>  )
}

export default DisplayGrid


