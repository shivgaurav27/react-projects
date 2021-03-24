import React, { lazy } from "react";
import { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const patientImages = lazy(() => import("./Components/Pages/PatientImages"));
const addPatient = lazy(() => import("./Components/Pages/AddPatient"));
const ViewPatients = lazy(() => import("./Components/Pages/ViewPatients"));

export default function Routes() {
  const SuspenseLoading = () => {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  };
  return (
    <Suspense fallback={<SuspenseLoading />}>
      <Switch>
        <Route exact path="/patientimages" component={patientImages} />
        <Route exact path="/addpatient" component={addPatient} />
        <Route exact path="/viewpatients" component={ViewPatients} />
      </Switch>
    </Suspense>
  );
}
