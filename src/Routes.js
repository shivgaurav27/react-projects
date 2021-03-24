import React from "react";
import { Switch, Route } from "react-router-dom";
import ViewPatients from "./Components/Pages/ViewPatients";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/viewpatients" component={ViewPatients} />
    </Switch>
  );
}
