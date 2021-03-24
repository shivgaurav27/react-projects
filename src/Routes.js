import React, { lazy } from "react";
import { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const ViewPatients = lazy(() => import("./Components/Pages/ViewPatients"));
export default function Routes() {
  const SuspenseLoading = () => {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  };
  return (
    <Suspense fallback={<SuspenseLoading />}>
      <Switch>
        <Route exact path="/viewpatients" component={ViewPatients} />
      </Switch>
    </Suspense>
  );
}
