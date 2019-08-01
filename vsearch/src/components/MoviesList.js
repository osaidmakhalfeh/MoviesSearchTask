import '../assets/moviesStyle.css'
import React from 'react';
import MovieCard from './MovieCard';

const MoviesList = props => {

  // create a new array from Movies
  const movies = props.movies.map(movie => {

    //create a card for each movie
    return <MovieCard key={movie.imdbID} movie={movie} />;
  });

  return <div className="ui segment">
    <div className="movies-list-flex">{movies}</div>
  </div>;
};

export default MoviesList;