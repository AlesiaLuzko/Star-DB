import React, { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

import ErrorBoundary from "../error-boundary";
import SwapiService from "../../services/swapi-servise";
import Layout from "../layout";
import { SwapiServiceProvider } from "../swapi-service-context";
import { StarshipDetails } from "../sw-components";
import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  LoginPage,
  SecretPage
} from "../pages";

import "../../global-styles/bootstrap.css";
import "./app.css";

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLogin = () => {
    setIsLoggedIn(true);
  };

  const swapiService = new SwapiService();

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="people" element={<PeoplePage />} />
      <Route path="people/:id" element={<PeoplePage />} />
      <Route path="planets" element={<PlanetsPage />} />
      <Route path="starships" element={<StarshipsPage />} />
      <Route path="starships/:id"
             element={<StarshipDetails /> } />
      <Route
        path="login"
        element={<LoginPage
          isLoggedIn={isLoggedIn}
          onLogin={onLogin}/>}
      />
      <Route
        path="secret"
        element={<SecretPage isLoggedIn={isLoggedIn} />}
      />
      <Route
        path="*"
        element={<p className="text-center">Page not found!</p>} />
    </Route>
  ));

  return (
    <ErrorBoundary>
      <SwapiServiceProvider value={swapiService}>
        <div className="app">
          <RouterProvider router={router} />
        </div>
      </SwapiServiceProvider>
    </ErrorBoundary>
  );
};

export default App;