import React, { Component } from "react";

import GoogleMapsComponent from "./MapContainer";
import Button from "./Button";
import BoycottModal from "./BoycottModal";
import logo from "../logo.svg";
import "../App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };

    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    // this is here as an example for how to connect to the backend
    // it should be removed once development has started
    // this.props.healthCheck();
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Boycottr</h1>
        </header>
        <Button buttonText="Add Boycott" onClickHandler={this.toggleModal}/>
        <BoycottModal show={this.state.isOpen}
          onClose={this.toggleModal}>
          Here's some content for the modal
        </BoycottModal>
        <div className="App-intro">
          <div className="map-container">
              <GoogleMapsComponent
                className="map" 
              />  
          </div>
        </div>
      </div>
    );
  }
}

export default App;
