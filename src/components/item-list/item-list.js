import React from "react";
import { withData } from "../hoc-helpers";
import SwapiService from "../../services/swapi-servise";

import './item-list.css';

const ItemList = (props) => {

  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li className="list-group-item list-group-item-action"
          key={id}
          onClick={() => onItemSelected(id)}>
        {label}
      </li>
    );
  });

  return (
    <ul className="item-list list-group list-group-flush">
      {items}
    </ul>
  );
};


const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);