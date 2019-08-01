import React from 'react';
import omdbapi from '../apis/omdbapi';
import SearchBar from './SearchBar';
import MoviesList from './MoviesList';

class App extends React.Component {
  
  state = { movies: null, loading: false };

  // This function called every time the searchBar component get Changes in its Text
  onSearchSubmit = async term => {

     this.setState({loading: true});

     await omdbapi.get('', {
      
      // from api docs, s = Movie title to search for, return JSON-list.
      params: { s: term } })
      
      // if get response
      .then(resp => this.setState({movies: resp.data.Search, loading: false}))

      // catch errors if founds
      .catch(( error ) => {   // Status code is not 200
        console.log(error);
        this.setState({loading: false});
    }); 
  };

  //This function return the list of Movies if not found it should show a Spinner to the user
  _renderMoviesList(){
    if(this.state.loading){
        return(
            <div  className="ui active inline loader"></div>
        );
    }else if(this.state.movies !== undefined && this.state.movies !== null){
        return(
            <MoviesList movies={this.state.movies} />
        );
    }else {
      return <div className="ui segment">
        <p>nothing to show!</p>
      </div>
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