import SearchBar from "./components/SearchBar";
import { createContext, useState } from "react";
import DisplayGrid from "./components/DisplayGrid";
import logo from "./Assets/screencast-high-resolution-logo-transparent.png"

export const MovieContext = createContext();


function App() {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  return (
    <MovieContext.Provider value={{movieData, setMovieData, isLoading, setIsLoading }}>
    <div className="App min-h-lvh bg-orange-600">
      <header className="bg-black w-full flex flex-col items-center p-4">
        <img src={logo} alt="The Screencast Logo" className="h-12 w-auto" />
        <h1 className="text-2xl text-orange-600 text-left font-bold">Movie Database</h1>
      </header>
      <SearchBar />
      <DisplayGrid />
    </div>
    </MovieContext.Provider>
  );
}

export default App;
