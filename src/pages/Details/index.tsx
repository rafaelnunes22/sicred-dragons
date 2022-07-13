import React from "react";
import { useParams, useLocation } from "react-router-dom";

export function Details() {
  const { state } = useLocation();
  console.log(state);
  return <h1> {"eae"} </h1>;
}
