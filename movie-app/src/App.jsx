import Card from "./Card";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {

  const apiUrl = "http://www.omdbapi.com?apikey=fa68316a"

  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState([])

  const SearchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search)
  }

  //this only work once for a user interface
  useEffect(() => {
    SearchMovies("Superman")
  }, [])

  return (
    <div className="app">
      <h1>Movie World</h1>
      <div className="search">
        <input value={searchValue} placeholder="Search for movies" onChange={(e) => { setSearchValue(e.target.value) }} />
        <i className="fa-solid fa-magnifying-glass" onClick={() => { SearchMovies(searchValue) }}></i>
      </div>
    
      {movies?.length > 0 ? (        //movie is not found it will display the message.
        <div className="container">
          {movies.map((movie) => (
            <Card key={movie} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;