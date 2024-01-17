import React from "react";
import { useParams } from "react-router-dom";

import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from "../hoc-helpers";
import ErrorBoundary from "../error-boundary";

const StarshipDetails = (props) => {
  const {id} = useParams();

  return (
    <ErrorBoundary>
      <ItemDetails {...props } itemId={id} >
        <Record key="model" field="model" label="Model"/>
        <Record key="length" field="length" label="Length"/>
        <Record key="costInCredits" field="costInCredits" label="Cost"/>
      </ItemDetails>
    </ErrorBoundary>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
}

export default withSwapiService(mapMethodsToProps)(StarshipDetails);