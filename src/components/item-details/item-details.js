import React, { useState, useEffect } from "react";

import Spinner from "../spinner";
import ErrorButton from "../error-button";

import './item-details.css';

const Record = ({ item, label, field }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label} </span>
      <span>{item[field]}</span>
    </li>
  );
};

export {
  Record
};

const ItemDetails = ({ getImageUrl, children, itemId, getData }) => {

  const [item, setItem] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const onPersonLoaded = (item) => {
    setItem(item);
    setImage(getImageUrl(item));
    setLoading(false);
  };

  const updateItem = () => {
    if (!itemId) {
      return;
    }

    getData(itemId)
      .then(onPersonLoaded);
  };

  useEffect(() => {
    updateItem();
    setLoading(true);
  }, [itemId]);

  if (!item) {
    return <span>Select an item from a list</span>;
  }

  const spinner = loading ? <Spinner/> : null;
  const content = !loading ? <ItemView item={item}
                                       image={image}
                                       children={children} /> : null;

  return (
    <div  className="item-details d-flex">
      {spinner}
      {content}
    </div>
  );
};

const ItemView = ({ item, image, children }) => {
  const { name } = item;
  return (
    <React.Fragment>
      <img className="item-image"
           src={image} alt="item"/>
      <div className="item-info">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {
            children.map((child) => {
              return React.cloneElement(child, {item});
            })
          }
        </ul>
        <ErrorButton />
      </div>
    </React.Fragment>
  );
};

export default ItemDetails;