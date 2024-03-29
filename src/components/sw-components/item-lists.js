import React from "react";

import ItemList from "../item-list";
import {
  withData,
  withSwapiService,
  withChildFunction,
  compose
} from "../hoc-helpers";

const renderName = (({name}) => <span>{name}</span>);
const renderModelAndName = (({name, model}) => <span>{name} ({model})</span>);

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  };
};

const mapPlanetsMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  };
};

const mapStarshipsMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  };
};

const PersonList = compose(
                      withSwapiService(mapPersonMethodsToProps),
                      withData,
                      withChildFunction(renderName)
                   )(ItemList);
const PlanetList = compose(
                      withSwapiService(mapPlanetsMethodsToProps),
                      withData,
                      withChildFunction(renderName)
                   )(ItemList);
const StarshipList = compose(
                      withSwapiService(mapStarshipsMethodsToProps),
                      withData,
                      withChildFunction(renderModelAndName)
                     )(ItemList);

export {
  PersonList,
  PlanetList,
  StarshipList
};