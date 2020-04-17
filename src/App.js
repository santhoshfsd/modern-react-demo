import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      errorMessage: "",
    };
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
    if (this.state.errorMessage && !this.state.latitude) {
      console.log("error");
      return <div>Error : {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.latitude) {
      console.log("sucess");
      return <div> Latitude : {this.state.latitude}</div>;
    }

    return <div>Loading !!!! </div>;
  }
}
export default App;
