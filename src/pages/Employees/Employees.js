import React from "react";
import PageHeader from "../../components/PageHeader";
import EmployeeForm from "./EmployeeForm";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import { Paper, makeStyles, TableBody } from "@material-ui/core";
import UseTable from "../../components/controls/UseTable";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

export default function Employees() {
  const classes = useStyles();
  const { TblContainer } = UseTable();
  return (
    <>
      <PageHeader
        title="New Employee"
        subTitle="Form Design With validation "
        icon={<PeopleOutlineIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
        {/* <TblContainer>
          <TableBody>

          </TableBody>
        </TblContainer> */}
      </Paper>
    </>
  );
}
