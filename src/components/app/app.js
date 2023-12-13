import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page";
import ErrorBoundary from "../error-boundary";
import ItemDetails, { Record } from "../item-details/item-details";
import Row from "../row";
import SwapiService from "../../services/swapi-servise";

import './app.css';
import ItemList from "../item-list";

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

    const { getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage,
            getAllPeople,
            getAllPlanets} = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}>

        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />

      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}>

        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />

      </ItemDetails>
    );

    return (
      <ErrorBoundary>
        <div className="app">
          <Header/>
          <RandomPlanet/>
          <PeoplePage/>

          {/*<ItemList*/}
          {/*  onItemSelected={() => {}}*/}
          {/*  getData={getAllPeople}>*/}

          {/*  { ({name}) => <span>{name}</span> }*/}
          {/*</ItemList>*/}

          {/*<ItemList*/}
          {/*  onItemSelected={() => {}}*/}
          {/*  getData={getAllPlanets}>*/}

          {/*  { ({name}) => <span>{name}</span> }*/}
          {/*</ItemList>*/}
        </div>
      </ErrorBoundary>
    );
  };
};