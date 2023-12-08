import React, {Component} from 'react';
import './people-page.css';
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";

export default class PeoplePage extends Component {
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

    return (
      <div className="content-list d-flex">
        <div className="content-item">
          <ItemList onItemSelected={this.onPersonSelected}/>
        </div>
        <div className="content-item">
          <PersonDetails personId={this.state.selectedPerson}/>
        </div>
      </div>
    )
  }
}