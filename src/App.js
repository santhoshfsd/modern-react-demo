import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      errorMessage: "",
    };
  }

  componentDidMount() {
    console.log("did-mount");
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setLatitude(position),
      (err) => this.setErr(err)
    );
  }

  setErr = (error) => {
    this.setState({ errorMessage: error.message });
  };

  setLatitude = (position) => {
    this.setState({ latitude: position.coords.latitude });
  };

  render() {
    console.log("render");

    if (this.state.errorMessage && !this.state.latitude) {
      console.log("error");
      return <div>Error : {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.latitude) {
      console.log("sucess");
      return <SeasonDisplay lat={this.state.latitude} />;
    }

    return <div>Loading !!!! </div>;
  }
}
export default App;
