import React from "react";

import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from "../hoc-helpers";

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props} >
      <Record key="gender" field="gender" label="Gender"/>
      <Record key="eyeColor" field="eyeColor" label="Eye Color"/>
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  }
}

export default withSwapiService(mapMethodsToProps)(PersonDetails);