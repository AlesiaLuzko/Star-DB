import {Component} from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page";
import ErrorIndicator from "../error-indicator";

import './app.css';

export default class App extends Component {

  state = {
    hasError: false
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true
    });
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator/>
    }

    return (
      <div className="app">
        <Header/>
        <RandomPlanet/>
        <PeoplePage/>
      </div>
    );
  };
};