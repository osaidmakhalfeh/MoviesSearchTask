import React from 'react';
import omdbapi from '../apis/omdbapi';
import SearchBar from './SearchBar';
import MoviesList from './MoviesList';

class App extends React.Component {
  
    state = { movies: [] };

  onSearchSubmit = async term => {
     await omdbapi.get('', {
      params: { s: term }  // from api docs, s = Movie title to search for, return list.
    }).then(resp => this.setState({movies: resp.data.Search}))
    .catch(( error ) => {   // Status code is not 200
        console.log(error);
    }); 
  };

  _renderMoviesList(){
    if(this.state.movies !== undefined){
        return(
            <MoviesList movies={this.state.movies} />
        );
    }
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        {this._renderMoviesList()}
      </div>
    );
  }
}

export default App;