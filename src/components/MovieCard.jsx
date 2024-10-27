import React, { useState } from 'react'
import Logo from "../Assets/ghosterror.jfif"
import { RiGhostFill } from "react-icons/ri";
import { useInView, useAnimate } from 'framer-motion';

function MovieCard({movieData}) {
    const [scope, animate] = useAnimate()
    const [hover, setHover] = useState(false)

    const handleMouseOver = () => {
        animate(scope.current, {backgroundColor: "#fff", color: "#000", y: -12, scale: 1.05})
        animate(".year", {backgroundColor: "#000", color: "#ea580c"})
       movieData?.releaseYear?.year ?? animate(".ghost", {backgroundColor: "#000", color: "#ea580c"})
        
    }
    
    const handleMouseOut = () => {
        animate(scope.current, {backgroundColor: "#000", color: "#ea580c", y: 0, scale: 1});
        animate(".year", {backgroundColor: "#fff", color: "fff"})
        movieData?.releaseYear?.year ?? animate(".ghost", {backgroundColor: "#fff", color: "#000"})

    }

    return (
    <div ref={scope}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="moviecard relative text-white w-[250px] rounded-md p-2 flex flex-col items-center gap-2 bg-black ">
        <img className=' rounded-md object-contain w-48 max-h-72' src={movieData?.primaryImage?.url ?? Logo} alt="movie icon" />
        <p className="self-start">{movieData.titleText.text}</p>
        <p className= 'year absolute rounded-full bg-white h-10 w-10 grid place-content-center text-semibold text-black font-semibold p-2 -top-4 -right-4'>
                        {movieData?.releaseYear?.year ?? <RiGhostFill className='ghost text-black text-2xl' />}</p>
        <p className='self-start justify-self-end text-orange-800 font-semibold'>{movieData.releaseDate?.country?.id ?? ""}</p>
    </div>
  )
}

export default MovieCard