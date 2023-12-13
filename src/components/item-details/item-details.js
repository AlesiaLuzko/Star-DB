import React, { Component } from "react";
import './item-details.css';
import SwapiService from "../../services/swapi-servise";
import Spinner from "../spinner";

const Record = ({item, label, field}) => {
  return (
    <li className="list-group-item">
      <span className="term">{ label } </span>
      <span>{ item[field] }</span>
    </li>
  );
};

export {
  Record
};

export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    image: null
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
    const { getImageUrl } = this.props;
    this.setState({
      item,
      image: getImageUrl(item),
      loading: false
    });
  };

  updateItem() {
    const { itemId, getData } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId)
      .then(this.onPersonLoaded);
  }

  render() {
    const { item, loading, image } = this.state;

    if (!item) {
      return <span>Select an item from a list</span>
    }

    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <PersonView item={item}
                                           image={image}
                                           children={this.props.children}/> : null;

    return (
      <div className="item-details d-flex">
        {spinner}
        {content}
      </div>
    );
  };
};

const PersonView = ({item, image, children}) => {
  const { name } = item;
  return (
    <React.Fragment>
      <img className="item-image"
           src={image} alt="item"/>
      <div className="item-info card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(children, (child) => {
              return React.cloneElement(child, { item });
            })
          }
        </ul>
      </div>
    </React.Fragment>
  );
};