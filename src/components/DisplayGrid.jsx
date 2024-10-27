import React from 'react'
import { useContext } from 'react'
import { MovieContext } from '../App'
import MovieCard from './MovieCard';


function DisplayGrid() {
  const { movieData, isLoading } = useContext(MovieContext);

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
<div className="grid gap-4 gap-y-8 auto-fill-grid place-content-center">
{movieData.map(movie => {
    return <MovieCard key={movie.node.entity.id} movieData = {movie.node.entity} isLoading={isLoading} />
})}
</div>  )
}

export default DisplayGrid


