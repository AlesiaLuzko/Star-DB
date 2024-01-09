import React, { Component } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

import ErrorBoundary from "../error-boundary";
import SwapiService from "../../services/swapi-servise";
import { SwapiServiceProvider } from "../swapi-service-context";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import { StarshipDetails } from "../sw-components";

import './app.css';

import Layout from "../layout";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="people" element={<PeoplePage />} />
    <Route path="people/:id" element={<PeoplePage />} />
    <Route path="planets" element={<PlanetsPage />} />
    <Route path="starships" element={<StarshipsPage />} />
    <Route path="starships/:id"
           element={<StarshipDetails /> } />
  </Route>
));

export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="app">
            <RouterProvider router={router} />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  };
};