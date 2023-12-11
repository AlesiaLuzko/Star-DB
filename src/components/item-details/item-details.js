import React, { Component } from "react";
import './item-details.css';
import SwapiService from "../../services/swapi-servise";
import Spinner from "../spinner";

export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
      this.setState({
        loading: true
      });
    }
  };

  onPersonLoaded = (item) => {
    this.setState({
      item,
      loading: false
    });
  };

  updateItem() {
    const { itemId } = this.props;
    if (!itemId) {
      return;
    }

    this.swapiService
      .getPerson(itemId)
      .then(this.onPersonLoaded);
  }

  render() {
    const { item, loading } = this.state;

    if (!item) {
      return <span>Select an item from a list</span>
    }

    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <PersonView item={item}/> : null;

    return (
      <div className="item-details d-flex">
        {spinner}
        {content}
      </div>
    );
  };
};

const PersonView = ({item}) => {
  const { id, name, gender, birthYear, eyeColor } = item;
  return (
    <React.Fragment>
      <img className="item-image"
           src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="item"/>
      <div className="item-info card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender </span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year </span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color </span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};