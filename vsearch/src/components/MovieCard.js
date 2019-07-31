import React from 'react';

class MovieCard extends React.Component {

  render() {
    const { Title, Poster, Year, Type } = this.props.movie;

    return (
        <div className="item movie">
            <img className="ui avatar image movie-img" src={Poster} alt=":)" />
            <div className="movie-content">
                <div className="header"><h4>{Title}</h4></div>
                <p>{Year}-{Type}</p>
            </div>
        </div>
    );
  }
}

export default MovieCard;