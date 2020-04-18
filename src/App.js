import React from "react";
import SearchBar from "./Component/SearchBar";

class App extends React.Component {
  onSubmitSearch(term) {
    console.log(term);
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSubmitSearch} />
      </div>
    );
  }
}

export default App;
