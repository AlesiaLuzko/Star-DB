import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundary from "../error-boundary";
import SwapiService from "../../services/swapi-servise";
import { SwapiServiceProvider } from "../swapi-service-context";

import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from "../sw-components";

import './app.css';


export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    hasError: false
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true
    });
  };

  render() {

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService} >
          <div className="app">
            <Header/>
            <RandomPlanet/>
            {/*<PeoplePage/>*/}

            <PersonList />
            {/*<PlanetList />*/}
            {/*<StarshipList />*/}

            <PersonDetails itemId={5}/>
            {/*<PlanetDetails itemId={3}/>*/}
            {/*<StarshipDetails itemId={9}/>*/}

          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  };
};