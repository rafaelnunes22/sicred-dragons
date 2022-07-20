import React, { useEffect, useState } from "react";
import { Login } from "./pages/Login";
import { Details } from "./pages/Details";
import { Form } from "./pages/Form";
import { List } from "./pages/List";

import {
  BrowserRouter,
  Routes as ReactRouterRoutes,
  Route,
} from "react-router-dom";
import { UserContext } from "./contexts/UserContext";

export function Routes() {
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    const storageUser = localStorage.getItem("user");
    if (!!storageUser) {
      setUser(JSON.parse(storageUser));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <ReactRouterRoutes>
          {user?.token ? (
            <>
              <Route path="/list" element={<List />} />
              <Route path="/details" element={<Details />} />
              <Route path="/form" element={<Form />} />
            </>
          ) : (
            <Route path="/*" element={<Login />} />
          )}
        </ReactRouterRoutes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
