import React from 'react';

class SearchBar extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { term: '' };

        // bind handle function to the class
        this.handleMovieName = this.handleMovieName.bind(this);
    }  
  

  onFormSubmit = event => {
    event.preventDefault();
  };

  
  handleMovieName(e){
    this.setState({term: e.target.value}, function () {
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