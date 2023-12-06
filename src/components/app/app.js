import {Component} from "react";

import Header from "../header";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import PlanetDetails from "../planet-details";
import RandomPlanet from "../random-planet";
import StarshipDetails from "../starship-details";

import './app.css';

export default class App extends Component {
  state = {
    selectedPerson: null
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    return (
      <div className="app">
        <Header/>
        <RandomPlanet/>
        <div className="content-list d-flex">
          <div className="content-item">
            <ItemList onItemSelected={this.onPersonSelected}/>
          </div>
          <div className="content-item">
            <PersonDetails personId={this.state.selectedPerson}/>
          </div>
        </div>
      </div>
    );
  };
};