import {Component} from "react";
import './item-list.css';
import SwapiService from "../../services/swapi-servise";
import Spinner from "../spinner";

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null
  }

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then((peopleList) => {
        this.setState({
          peopleList
        });
      });
  };

  renderItems(arr) {
    return arr.map(({id, name}) => {
      return (
        <li className="list-group-item list-group-item-action"
            key={id}
            onClick={() => this.props.onItemSelected(id)}>
          {name}
        </li>
      );
    });
  };

  render() {
    const { peopleList } = this.state;

    if(!peopleList) {
      return <Spinner/>
    }

    const items = this.renderItems(peopleList);

    return (
      <ul className="item-list list-group list-group-flush">
        {items}
      </ul>
    );
  };
};
