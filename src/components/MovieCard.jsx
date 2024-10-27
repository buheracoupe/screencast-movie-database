import React, { useState } from 'react'
import Logo from "../Assets/ghosterror.jfif"
import { RiGhostFill } from "react-icons/ri";

function MovieCard({movieData}) {
    const [hover, setHover] = useState(false)

    const handleMouseOver = () => {
        setHover(true)
    }
    
    const handleMouseOut = () => {
        setHover(false)
    }

    return (
    <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="moviecard relative text-white w-[250px] hover:bg-white hover:text-black rounded-md p-2 flex flex-col items-center gap-2 bg-black ">
        <img className=' rounded-md object-contain w-48 max-h-72' src={movieData?.primaryImage?.url ?? Logo} alt="movie icon" />
        <p className="self-start">{movieData.titleText.text}</p>
        <p
        className={hover? `absolute rounded-full bg-black h-10 w-10 grid place-content-center text-semibold text-orange-800 font-semibold p-2 -top-4 -right-4` :
                          `absolute rounded-full bg-white h-10 w-10 grid place-content-center text-semibold text-black font-semibold p-2 -top-4 -right-4`}>
                        {movieData?.releaseYear?.year ?? <RiGhostFill className='text-black text-2xl' />}
            </p>
        <p className='self-start justify-self-end text-orange-800 font-semibold'>{movieData.releaseDate?.country?.id ?? ""}</p>
    </div>
  )
}

export default MovieCard