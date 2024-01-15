import React from "react";
import { useParams } from "react-router-dom";

import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from "../hoc-helpers";

const StarshipDetails = (props) => {
  const {id} = useParams();

  return (
    <ItemDetails {...props } itemId={id} >
      <Record key="model" field="model" label="Model"/>
      <Record key="length" field="length" label="Length"/>
      <Record key="costInCredits" field="costInCredits" label="Cost"/>
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
}

export default withSwapiService(mapMethodsToProps)(StarshipDetails);