import React, { useEffect } from "react";
import { Login } from "./pages/Login";
import { Details } from "./pages/Details";
import { Form } from "./pages/Form";
import { List } from "./pages/List";

import {
  BrowserRouter,
  Routes as ReactRouterRoutes,
  Route,
} from "react-router-dom";
import { useUser } from "./contexts/UserContext";

export function Routes() {
  const { user, setUser } = useUser();

  useEffect(() => {
    const storageUser = localStorage.getItem("user");
    if (!!storageUser) {
      setUser(JSON.parse(storageUser));
    }
  }, [setUser]);

  return (
    <BrowserRouter>
      <ReactRouterRoutes>
        {user?.token ? (
          <>
            <Route path="/*" element={<List />} />
            <Route path="/details" element={<Details />} />
            <Route path="/form" element={<Form />} />
          </>
        ) : (
          <Route path="/*" element={<Login />} />
        )}
      </ReactRouterRoutes>
    </BrowserRouter>
  );
}
