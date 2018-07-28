import React, { Component } from "react";

import MapContainer from "./MapContainer";
import Button from "./Button";
import "../App.css";

class App extends Component {
  constructor() {
    super();

    this.alert = this.alert.bind(this);
  }
  componentDidMount() {
    // this is here as an example for how to connect to the backend
    // it should be removed once development has started
    // this.props.healthCheck();
  }

  alert() {
    alert('you clicked the button');
  }

  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <div className="map-container">
              <MapContainer
                className="map" 
              />
              <Button buttonText="Add Boycott" onClickHandler={this.alert} />  
          </div>
        </div>
      </div>
    );
  }
}

export default App;
