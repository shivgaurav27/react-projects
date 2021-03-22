import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import EmployeeForm from "./EmployeeForm";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import UseTable from "../../components/controls/UseTable";
import * as EmployeeService from "../../services/EmployeeServices";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));
const headCells = [
  { id: "fullName", label: "Employee Name" },
  { id: "email", label: "Email Address (personal)" },
  { id: "mobile", label: "Mobile Number" },
  { id: "department", label: "Department", disableSorting: true },
];

export default function Employees() {
  const classes = useStyles();
  const [records, setRecords] = useState(EmployeeService.getAllEmployees);
  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  } = UseTable(records, headCells);
  return (
    <>
      <PageHeader
        title="New Employee"
        subTitle="Form Design With validation "
        icon={<PeopleOutlineIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        {/* <EmployeeForm /> */}
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.department}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
    </>
  );
}
