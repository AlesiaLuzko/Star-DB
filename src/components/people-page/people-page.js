import React, {Component} from 'react';
import './people-page.css';
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-servise";

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
    hasError: false
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true
    });
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator/>;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({name,  gender, birthYear}) => `${name} (${gender}, ${birthYear})`}/>
    )

    return (
      <div className="content-list d-flex">
        <div className="content-item">
          {itemList}
        </div>
        <div className="content-item">
          <PersonDetails personId={this.state.selectedPerson}/>
        </div>
      </div>
    )
  }
}