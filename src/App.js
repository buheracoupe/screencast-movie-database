import SearchBar from "./components/SearchBar";
import { createContext, useState } from "react";
import DisplayGrid from "./components/DisplayGrid";

export const MovieContext = createContext();


function App() {
  const [movieData, setMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  return (
    <MovieContext.Provider value={{movieData, setMovieData, isLoading, setIsLoading }}>
    <div className="App min-h-lvh bg-orange-600">
      <SearchBar />
      <DisplayGrid />
    </div>
    </MovieContext.Provider>
  );
}

export default App;
