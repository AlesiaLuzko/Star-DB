import React, { useState } from "react";

import { PlanetDetails, PlanetList } from "../sw-components";
import Row from "../row";
import ErrorBoundary from "../error-boundary";

const PlanetsPage = () => {

  const [selectedItem, setSelectedItem] = useState(null);

  const onItemSelected = (selectedItem) => {
    setSelectedItem(selectedItem)
  };

  return (
    <ErrorBoundary>
      <Row
        left={<PlanetList onItemSelected={onItemSelected}/>}
        right={ <PlanetDetails itemId={selectedItem}/>} />
    </ErrorBoundary>
  );
};

export default PlanetsPage;