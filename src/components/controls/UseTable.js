import { Table, TableCell, TableHead, TableRow } from "@material-ui/core";
import React from "react";

export default function UseTable(records, headCells) {
  const TblContainer = (props) => <Table>{props.children}</Table>;
  const TblHead = (props) => (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id}>{headCell.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
  return {
    TblContainer,
    TblHead,
  };
}
