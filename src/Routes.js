import React, { lazy } from "react";
import { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const viewPatients = lazy(() => import("./Components/Pages/ViewPatients"));
const patientImages = lazy(() => import("./Components/Pages/PatientImages"));
const addPatient = lazy(() => import("./Components/Pages/AddPatient"));

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
        <Route exact path="/viewpatients" component={viewPatients} />
        <Route exact path="/patientimages" component={patientImages} />
        <Route exact path="/addpatient" component={addPatient} />
      </Switch>
    </Suspense>
  );
}
