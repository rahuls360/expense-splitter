import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

import DoneOutline from "@material-ui/icons/DoneOutline";
import Remove from "@material-ui/icons/Remove";

class DataTable extends Component {
  tableHeadings = [
    "Expense",
    "Paid By",
    "Split by",
    "Expense per person",
    "Payment completed by",
    "Payment pending by",
    "All dues cleared"
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
            {this.props.expensesList.map(row => (
              <TableRow>
                <TableCell>Rs {row.amount}</TableCell>
                <TableCell>{row.paidby}</TableCell>
                <TableCell>{row.splitby} people</TableCell>
                <TableCell>Rs {row.expenseperperson}</TableCell>
                <TableCell>-</TableCell>
                <TableCell>-</TableCell>
                <TableCell>
                  {row.status ? (
                    <DoneOutline style={styles.success} />
                  ) : (
                    <Remove style={styles.failure} />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </>
    );
  }
}

const styles = {
  success: {
    color: "green"
  },
  failure: {
    color: "red"
  }
};

export default DataTable;
