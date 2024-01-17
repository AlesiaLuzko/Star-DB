import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { PersonDetails, PersonList } from "../sw-components";
import Row from "../row";
import ErrorBoundary from "../error-boundary";

const PeoplePage = () => {
  const navigate = useNavigate();
  const {id} = useParams();

  return (
    <ErrorBoundary>
      <Row
        left={<PersonList onItemSelected={(id) => {
          return navigate(`/people/${id}`);
        }} />}
        right={<PersonDetails itemId={id} />}/>
    </ErrorBoundary>
  );
};

export default PeoplePage;