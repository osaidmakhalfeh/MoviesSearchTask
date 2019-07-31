import '../assets/moviesStyle.css'
import React from 'react';
import MovieCard from './MovieCard';

const MoviesList = props => {
  const movies = props.movies.map(movie => {
    return <MovieCard key={movie.imdbID} movie={movie} />;
  });

  return <div className="movies-list-flex">{movies}</div>;
};

export default MoviesList;