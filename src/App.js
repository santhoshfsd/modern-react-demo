import React from "react";
import unsplash from "./Api/Unsplash";
import SearchBar from "./Component/SearchBar";

class App extends React.Component {
  state = {
    images: [],
  };

  onSubmitSearch = async (term) => {
    const response = await unsplash.get(
      "https://api.unsplash.com/search/photos",
      {
        params: { query: term },
      }
    );
    this.setState({ images: response.data.results });
    console.log(this.state.images);
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSubmitSearch} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
