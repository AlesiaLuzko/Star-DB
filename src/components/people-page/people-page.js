import React, {Component} from 'react';

import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-servise";
import Row from "../row";
import ErrorBoundary from "../error-boundary";

import './people-page.css';

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: null
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}>

        {(item) => `${item.name} (${item.birthYear})`}
      </ItemList>
    );

    const itemDetails = (
      <ItemDetails itemId={this.state.selectedPerson}/>
    );

    return (
      <ErrorBoundary>
        <Row left={itemList}
             right={itemDetails}/>
      </ErrorBoundary>
    );
  }
}

