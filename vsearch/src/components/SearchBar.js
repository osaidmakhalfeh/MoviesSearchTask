import React from 'react';

class SearchBar extends React.Component {
  
  /**
   *  SearchBar component 
   *  --this aomponent handle a change on the text input
   *  --then it send it to on submit using props
   */

  constructor(props) {
    super(props);
    this.state = { term: '' };   // term : value of the movie title in search box

    // bind handle function to this class
    this.handleMovieName = this.handleMovieName.bind(this);
  }  
  

  onFormSubmit = event => {
    // prevent the form from submiting data
    event.preventDefault();
  };

  // handle new movie name
  handleMovieName(e){
    this.setState({term: e.target.value}, function () {
        //when get a Movie name, call props onSubmit
        this.props.onSubmit(this.state.term);
    });
  }


  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <h3>Movies Search</h3>
            <input
              type="text"
              placeholder="Type the name of your favorite movie..."
              value={this.state.term}
              onChange={this.handleMovieName}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;