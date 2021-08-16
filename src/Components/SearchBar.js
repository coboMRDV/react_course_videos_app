import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <div className="ui segment search-bar">
          <form action="" className="ui form" onSubmit={this.onFormSubmit}>
            <div className="field">
              <label>Search For A Video</label>
              <input
                type="text"
                onChange={this.onInputChange}
                value={this.state.term}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default SearchBar;
