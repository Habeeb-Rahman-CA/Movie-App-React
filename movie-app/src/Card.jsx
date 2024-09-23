
const MovieCard = (movie) => {

    return (
      <div className="movie">
        <div>
          <p>{movie.movie.Year}</p>
        </div>
  
        <div>
          <img src={movie.movie.Poster} />
        </div>
  
        <div>
          <span>{movie.movie.Type}</span>
          <h3>{movie.movie.Title}</h3>
        </div>
      </div>
    );
  }
  
  export default MovieCard; 