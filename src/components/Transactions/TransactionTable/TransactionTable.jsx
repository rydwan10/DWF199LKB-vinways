import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

// components
import Row from "./Row/Row";
import { rows } from "./fakeData";

import makeStyles from "./style";

function TransactionTable({ transactions, handleApprove, handleCancel }) {
  const classes = makeStyles();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead className={classes.tableHeading}>
          <TableRow>
            <TableCell className={classes.tableCell} width={2}>
              No.{" "}
            </TableCell>
            <TableCell className={classes.tableCell} align="right">
              Users
            </TableCell>
            <TableCell className={classes.tableCell} align="right">
              Bukti Transfer
            </TableCell>
            <TableCell className={classes.tableCell} align="right">
              Remaining Active
            </TableCell>
            <TableCell className={classes.tableCell} align="right">
              Status User
            </TableCell>
            <TableCell className={classes.tableCell} align="right">
              Status Payment
            </TableCell>
            <TableCell className={classes.tableCell} align="right">
              {" "}
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction, index) => (
            <Row
              handleApprove={handleApprove}
              handleCancel={handleCancel}
              index={index}
              key={transaction.id}
              transaction={transaction}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TransactionTable;
