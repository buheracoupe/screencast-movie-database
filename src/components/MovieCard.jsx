import React from 'react'
import Logo from "../Assets/ghosterror.jfif"

function MovieCard({movieData}) {
    // if (!movieData || !movieData.primaryImage || !movieData.primaryImage.url) {
    //     return <div>No movie data available</div>;
    // }//how is this a fix???

    return (
    <div className="moviecard">
        <img className='border-black border-2 rounded-md' src={movieData?.primaryImage?.url ?? Logo} alt="movie icon" />
    </div>
  )
}

export default MovieCard