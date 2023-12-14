import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundary from "../error-boundary";
import SwapiService from "../../services/swapi-servise";
import { SwapiServiceProvider } from "../swapi-service-context";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";

import './app.css';


export default class App extends Component {

  swapiService = new SwapiService();

  render() {

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService} >
          <div className="app">
            <Header />
            <RandomPlanet />
            <PeoplePage />
            <PlanetsPage />
            <StarshipsPage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  };
};