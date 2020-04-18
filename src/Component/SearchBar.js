import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <label>Image Search</label>
          <input
            className="ui field"
            type="text"
            value={this.state.term}
            onChange={(e) => {
              this.setState({ term: e.target.value.toUpperCase() });
            }}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
