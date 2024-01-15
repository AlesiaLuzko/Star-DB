import React from "react";

import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from "../hoc-helpers";

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props} >
      <Record key="population" field="population" label="Population"/>
      <Record key="rotationPeriod" field="rotationPeriod" label="Rotation Period"/>
      <Record key="diameter" field="diameter" label="Diameter"/>
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  }
}

export default withSwapiService(mapMethodsToProps)(PlanetDetails);