import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

class DataTable extends Component {
  tableHeadings = [
    "Expense",
    "Paid By",
    "Split by",
    "Expense per person",
    "Payment completed by",
    "Payment pending by"
  ];
  render() {
    return (
      <>
        <Table>
          <TableHead>
            <TableRow>
              {this.tableHeadings.map(heading => (
                <TableCell>{heading}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>tersDD</TableCell>
              <TableCell>tersDD</TableCell>
              <TableCell>tersDD</TableCell>
              <TableCell>tersDD</TableCell>
              <TableCell>tersDD</TableCell>
              <TableCell>tersDD</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </>
    );
  }
}

export default DataTable;
