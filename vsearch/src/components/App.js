import React from 'react';
import omdbapi from '../apis/omdbapi';
import SearchBar from './SearchBar';
import MoviesList from './MoviesList';

class App extends React.Component {
  
    state = { movies: [], loading: false };

  onSearchSubmit = async term => {

     this.setState({loading: true});

     await omdbapi.get('', {
      
      // from api docs, s = Movie title to search for, return list.
      params: { s: term } })

      .then(resp => this.setState({movies: resp.data.Search, loading: false}))

      .catch(( error ) => {   // Status code is not 200

        console.log(error);
        this.setState({loading: false});
    }); 
  };

  _renderMoviesList(){
    if(this.state.loading){
        return(
            <div  className="ui active inline loader">
             
            </div>
        );
    }

    if(this.state.movies !== undefined){
        return(
            <MoviesList movies={this.state.movies} />
        );
    }
  }

  render() {
    return (
      <div  className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar id="loadingme" onSubmit={this.onSearchSubmit}/>
        {this._renderMoviesList()}
      </div>
    );
  }
}

export default App;