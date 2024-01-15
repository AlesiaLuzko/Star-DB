import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import SwapiService from "../../services/swapi-servise";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import "./random-planet.css";

const RandomPlanet = ({updateInterval = 7000}) => {
  const swapiService = new SwapiService();

  const [planet, setPlanet] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const updatePlanet = () => {
    const id = Math.floor(Math.random() * 18) + 2;
    swapiService
      .getPlanet(id)
      .then(onPlanetLoaded)
      .catch(onError);
  };

  const onPlanetLoaded = (planet) => {
    setPlanet(planet);
    setLoading(false);
    setError(false);
  };

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  useEffect(() => {
    updatePlanet()
    const interval = setInterval(updatePlanet, updateInterval);
    return () => clearInterval(interval);
  }, []);

  const hasData = !(loading || error);

  const errorMessage = error ? <ErrorIndicator/> : null;
  const spinner = loading ? <Spinner/> : null;
  const content = hasData ? <PlanetView planet={planet}/> : null;

  return (
    <div className="random-planet d-flex">
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
};

RandomPlanet.propTypes = {
  updateInterval: PropTypes.number
};

const PlanetView = ({planet}) => {
  const {id, name, population, rotationPeriod, diameter} = planet;
  return (
    <React.Fragment>
      <img className="random-image"
           alt="planet"
           src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
      <div className="planet-info card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population </span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period </span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter </span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default RandomPlanet;