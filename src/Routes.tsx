import React, { ReactElement } from "react";
import { Login } from "./pages/Login";
import { Details } from "./pages/Details";
import { Form } from "./pages/Form";
import { List } from "./pages/List";

import { BrowserRouter, Routes as ReactRouterRoutes, Route, RouteProps, Navigate } from "react-router-dom";

type Props = {
  children: ReactElement;
} & RouteProps;

function PrivateRoute({ children }: Props) {
  return true ? children : <Navigate to="/" />;
}

export function Routes() {
  return (
    <BrowserRouter>
      <ReactRouterRoutes>
        <Route path="/*" element={<Login />} />
        <Route path="/list" element={
          <PrivateRoute>
            <List />
          </PrivateRoute>}
        />
        <Route path="/details" element={
          <PrivateRoute>
            <Details />
          </PrivateRoute>}
        />
        <Route path="/form" element={
          <PrivateRoute>
            <Form />
          </PrivateRoute>}
        />
      </ReactRouterRoutes>
    </BrowserRouter>
  );
}