import React, { Component } from "react";
import "./App.css";
import MainPage from "./components/MainPage";

class App extends Component {
  state = {
    isLoaded: false,
    parkingData: []
  };
  componentDidMount() {
    fetch(
      "http://api.parkwhiz.com/parking/reservation/?key=0255bd8ed81adc912b5d2d720e8dd777e901d81d"
    )
      .then(response => response.json())
      .then(parkData => {
        this.setState({
          isLoaded: true,
          parkingData: parkData
        });
      });
  }

  render() {
    if (!this.state.isLoaded == true) {
      return "Loading";
    } else {
      return (
        <div className="App">
          <h1>ParkIt.</h1>
          <MainPage
            parkingData={this.state.parkingData}
            location={this.state.location}
            zoom={this.state.zoom}
            haveUsersLocation={this.state.haveUsersLocation}
          />
        </div>
      );
    }
  }
}

export default App;
